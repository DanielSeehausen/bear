class SessionsController < ApplicationController
  # skip_before_action :authenticate

  def new
    @user = User.new
  end

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

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

end
