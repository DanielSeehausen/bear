class UserGamesController < ApplicationController

  # def new
  #   @usergame = UserGame.new
  # end
  #
  # def create
  #   @usergame = UserGame.new(usergame_params)
  #     if @usergame.save
  #       redirect_to usergame_path
  #     else
  #       render :new
  #   end
  # end
  #
  # def show
  #   @usergame = UserGame.find(params[:id])
  #   render json: @usergame
  # end
  #
  # def index
  #   @usergames = UserGame.all
  #   render json: @usergames
  # end
  #
  # def edit
  #   @usergame = UserGame.find(params[:id])
  # end
  #
  # def update
  #   @usergame = UserGame.find(params[:id])
  #   @usergame.update(usergame_params)
  #   redirect_to @usergame
  # end
  #
  # def destroy
  #   @usergame = UserGame.find(params[:id])
  #   @usergame.delete
  #   redirect_to usergames_path
  # end
  #
  # private
  #
  # def usergame_params
  #   params.require(:user_game).permit(:user_id, :game_id)
  # end

end
