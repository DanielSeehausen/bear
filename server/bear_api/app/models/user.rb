require 'securerandom'
class User < ApplicationRecord
  before_create :set_auth_token
  has_many :user_games
  has_many :game_rounds, through: :user_games

  def self.authenticate(username, password)
    user = User.find_by(username: username)
    user && user.authenticate(password)
  end

  def self.from_token(token)
    user_id = Auth.decode(token)["user_id"]
    User.find(user_id)
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

  def set_auth_token
    return if auth_token.present?
    self.auth_token = generate_auth_token
  end

  def generate_auth_token
    SecureRandom.uuid.gsub(/\-/,'')
  end

end
