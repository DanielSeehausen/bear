class GameRoundsController < ApplicationController

  @@game_round_config = {starting_capital: 100000}

  def serve_game_data
    @game_round_data = {msg_type: 'game_round', msg_data: nil}
    @game_round = GameRound.find_by(ticker: params[:ticker]) || GameRound.find_by(ticker: "^GSPC")

    if !@game_round && params
      @game_round_data[:msg_data] = {status: 'Not Found'}
    else
      @game_round_data[:msg_data] = {status: 'Found',
                                     asset_type: @game_round.asset_type,
                                     time_values: @game_round.time_values,
                                     price_values: @game_round.price_values,
                                     ticker: @game_round.ticker,
                                     company_name: @game_round.company_name,
                                     game_round_config: @@game_round_config}
    end

    render json: @game_round_data.to_json
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
