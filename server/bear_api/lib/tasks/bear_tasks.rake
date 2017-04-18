namespace :bear_tasks do
  desc "Print out sample api call to yahoo finance"
  task :print_api_test_call => :environment do
    yahoo_client = YahooFinance::Client.new
    x = yahoo_client.historical_quotes("^GSPC", { start_date: Time::now-(24*60*60*100), end_date: Time::now })
    y = x.map do |element|
      element.to_h
    end
  end
end
