class UsersController < ApplicationController

  def show
    @user = User.find(params[:id]) rescue false
    @username = params[:username]
    if !@user
      @unique_id = gen_id()
      @user_info = {msg_type: 'user_info', msg_data: {status: 'Newly Created', unique_id: @unique_id, username: "Anon", games_played: 0, cumulative_performance: 0}}
      create(@username)
    else
      @user_info = {msg_type: 'user_info', msg_data: {status: 'Found', games_played: @user.games_played, cumulative_performance: @user.cumulative_performance }}
    end
    render json: @user_info.to_json
  end

  def record_game
    @score = params[:score]
    @user = User.find(params[:user_id])
    @user.update_score(@score)
  end


  private
  def create(username)
    @user = User.create({username: username, games_played: 0, cumulative_performance: 0})
  end

  def gen_id
    User.all.length
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
