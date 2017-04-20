
def unpack_stock_values(results, limit, ticker)
  time_values = []
  price_values = []

  results.each_with_index do |element, idx|
    break if idx == limit
    current_element = element.to_h
    time_value = current_element[:trade_date] || ''
    price_value = current_element[:close] || ''

    if (time_value == '') || (price_value == '')
      puts "data was wrong for ", current_element
      next
    else
      time_values.push(time_value)
      price_values.push(price_value)
    end
  end

  if time_values.length != limit
    puts "Bad data for: #{ticker}"
    puts time_values
    puts price_values
    puts time_values.length
    puts price_values.length
    return false
  end
  [price_values, time_values]
end

namespace :yahoo_api do
  desc "Print out sample api call to yahoo finance"
  task :print_api_test_call => :environment do

    ticker_to_grab = ["^GSPC"]
    limit = 120
    start_date = Time::now - (24*60*60*365)
    end_date = start_date + (24*60*60*(limit+50))
    puts start_date
    puts end_date

    ticker_to_grab.each do |ticker|
      yahoo_client = YahooFinance::Client.new
      results = yahoo_client.historical_quotes(ticker, { start_date: start_date, end_date: end_date })

      x = unpack_stock_values(results, limit, ticker)
      next if x == false

      price_values = x[0]
      time_values = x[1]

      current_game_round = GameRound.create({
        time_values: time_values,
        price_values: price_values,
        ticker: ticker
      })

      puts "Succesfully loaded: ", current_game_round
    end

  end

end
