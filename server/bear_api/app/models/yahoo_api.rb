class YahooApiRecord < ActiveRecord::Base

  # method to send request to fetch yahoo finance api
  def yahoo_api_fetch
    yahoo_url = "INSERT URL"

    JSON.parse(RestClient.get(yahoo_url + self.name + "&" + KEY))
  end

  # method to update game_round data for each record
  def gather_yahoo_api_data
    @game_round_data = yahoo_api_fetch
    game_round = @game_round_data["underlying_asset_type"]["time_values"][0]["price_values"][0]
    if self.game_round = # game_round then fetch from the store
    end
  end

  # makes a request to a search query
  def yahoo_api_ticker_selector
    yahoo_url = "INSERT URL"
    ticker = "ticker=#{self.ticker},#{self.ticker}"

    JSON.parse(RestClient.get(yahoo_url + ticker + "&" + "&key=" + KEY))
  end

end
