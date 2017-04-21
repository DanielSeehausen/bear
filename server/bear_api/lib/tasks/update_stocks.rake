$stocks = [
  {:company_name => "Expedia", :ticker => "EXPE"},
  {:company_name => "Intuitive Surgical", :ticker => "ISRG"},
  {:company_name => "Whole Foods Market", :ticker => "WFM"},
  {:company_name => "Amazon.com", :ticker => "AMZN"},
  {:company_name => "Priceline", :ticker => "PCLN"},
  {:company_name => "Michael Kors", :ticker => "KORS"},
  {:company_name => "TripAdvisor", :ticker => "TRIP"},
  {:company_name => "Akamai Technologies", :ticker => "AKAM"},
  {:company_name => "First Solar", :ticker => "FSLR"},
  {:company_name => "Netflix", :ticker => "NFLX"},
  {:company_name => "S&P 500 IDX", :ticker => "^GSPC"}
]
$start_date = Time::now - (24*60*60*365) # past year of data for error room
$end_date = Time::now # everything up until present
$limit = 230 # there were 251 trading days in 2017 -- this is roughly the last year. We will extract 240 trading days from the past year of data, starting with the most recent
$yahoo_client = YahooFinance::Client.new

def unpack_stock_values(api_stock_data, stock)
  time_values = []
  price_values = []

  api_stock_data.reverse.each_with_index do |element, idx| #reversing so we start with the most recent
    break if idx == $limit # only get $limit to account for holidays
    day_data = element.to_h
    day_data[:trade_date] ? time_values.push(day_data[:trade_date]) : next
    day_data[:close] ? price_values.push(day_data[:close]) : next
  end

  if time_values.length != $limit
    puts time_values
    puts price_values
    puts "Bad data for: #{stock[:ticker]}! Not enough values from previous year.\nFound: #{time_values.length}\nNeeded: #{$limit}"
    return false
  end
  return price_values, time_values
end

namespace :yahoo_api do
  desc "Updates 10 volatile stocks that are in the S&P 500"
  task :update_stocks => :environment do
    $stocks.each do |stock|
      puts "Fetching Data for #{stock[:company_name]}"
      api_stock_data = $yahoo_client.historical_quotes(stock[:ticker], { start_date: $start_date, end_date: $end_date })
      price_values, time_values = unpack_stock_values(api_stock_data, stock) || next
      new_game_round = GameRound.create({
        time_values: time_values,
        price_values: price_values,
        ticker: stock[:ticker],
        company_name: stock[:company_name],
        asset_type: "equity"
      })
      puts "\t--> Succesfully loaded: #{stock[:company_name]}"
    end
  end
end
