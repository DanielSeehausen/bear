namespace :bear_tasks do
  desc "Print out sample api call to yahoo finance"
  task :print_api_test_call => :environment do
    yahoo_client = YahooFinance::Client.new
    x = yahoo_client.quotes(["BVSP", "NATU3.SA", "USDJPY=X"], [:ask, :bid, :last_trade_date])
    y = x.map do |element|
      element.to_h
    end
    binding.pry
  end
end
