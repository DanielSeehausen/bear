class GameRoundsController < ApplicationController

  @@game_round_config = {starting_capital: 100000}
  @@default_stocks = [
  ["Expedia", "EXPE"],
  ["Intuitive Surgical", "ISRG"],
  ["Whole Foods Market", "WFM"],
  ["Amazon.com", "AMZN"],
  ["Priceline", "PCLN"],
  ["Akamai Technologies", "AKAM"],
  ["First Solar", "FSLR"],
  ["Netflix", "NFLX"],
  ["S&P 500 IDX", "^GSPC"],
  ["Herbalife", "HLF"],
  ["Alphabet", "GOOG"],
  ["BlackBerry", "BBRY"],
  ["American International Group", "AIG"],
  ["Vivus", "VVUS"],
  ["Nicholas Financial", "NICK"],
  ["Lazard", "LAZ"],
  ["Goldman Sachs", "GS"],
  ["BNP Paribas", "BNP.PA"],
  ["The Houses of Lazard", "LAZ"],
  ["BlackRock", "BLK"],
  ["Activision Blizzard", "ATVI"],
  ["Newmont Mining", "NEM"],
  ["Trina Solar", "TSL"]
]

  def pack_game_round_data(game_round)
    return {status: 'Found',
            asset_type: game_round.asset_type,
            time_values: game_round.time_values,
            price_values: game_round.price_values,
            ticker: game_round.ticker,
            company_name: game_round.company_name,
            game_round_config: @@game_round_config}
  end

  def serve_default_game_data
    @game_rounds_data = {msg_type: 'game_rounds', msg_data: nil}
    @game_rounds_data[:msg_data] = @@default_stocks.map do |company|
      @game_round = GameRound.find_by(ticker: company[1])
      @game_round ? pack_game_round_data(@game_round) : nil
    end.compact
    render json: @game_rounds_data.to_json
  end

  def serve_single_stock_data(ticker)
    @game_round_data = {msg_type: 'game_round', msg_data: nil}
    @game_round = GameRound.find_by(ticker: params[:ticker]) || GameRound.find_by(ticker: "^GSPC")
    @game_round_data[:msg_data] = pack_game_round_data(@game_round)
    render json: @game_round_data.to_json
  end

  def serve_game_data
    params[:ticker] == "DEFAULT" ? serve_default_game_data : serve_single_stock_data(params[:ticker])
  end
  
  # protected
  #
  # def authenticate
  #   authenticate_token || render_unauthorized
  # end
  #
  # def authenticate_token
  #   authenticate_with_http_token do |token, options|
  #     User.find_by(auth_token: token)
  #   end
  # end
  #
  # def render_unauthorized
  #   self.headers['WWW-Authenticate'] = 'Token realm="Application"'
  #   render json: 'Bad credentials', status: 401
  # end

end
