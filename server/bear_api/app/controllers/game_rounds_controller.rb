class GameRoundsController < ApplicationController
  before_action :authenticate

  def index
    gamerounds = GameRounds.all
    render json: gamerounds, status: 200
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