class SessionsController < ApplicationController

  def create
    @user = User.find(username: params[:user][:username])
    if @user.authenticate(username: params[:username], password: params[:password])
      payload = {user_id: @user.id}
      token = Auth.issue(payload)
      render json: {jwt: token}
    else
      render json: {error: "bad username or password"}, status: 401
    end
  end

end

#
# authenticate_or_request_with_http_token('Premium') do |token, options|
#   User.find_by(auth_token: token)
# end
