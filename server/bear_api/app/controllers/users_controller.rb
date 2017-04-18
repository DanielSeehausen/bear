class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      payload = {user_id: @user.id}
      token = Auth.issue(payload)
      render json: {jwt: token}
    else
      render json: {error: @user.errors}, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
