class GameRoundsController < ApplicationController
  before_action :authenticate

  def new
    @gameround = GameRound.new
    render json: @gameround
  end

  def index
    @gamerounds = GameRound.all
    render json: @gamerounds
  end

  def create
    @gameround = GameRound.new

    if @gameround.save
      redirect_to game_round_path
    else
      render :new
    end
  end

  def show
    @gameround = GameRound.find(params[:id])
  end

  private

  def gameround_params
    params.require(:game_round).permit(:underlying_asset_type, :time_values, :price_values, :name)
  end

  protected

  def authenticate
    authenticate_token || render_unauthorized
  end

  def authenticate_token
    authenticate_with_http_token do |token, options|
      User.find_by(auth_token: token)
    end
  end

  def render_unauthorized
    self.headers['WWW-Authenticate'] = 'Token realm="Application"'
    render json: 'Bad credentials', status: 401
  end

end
