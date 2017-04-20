class YahooApiController < ActionController

  def new
    @game_round = GameRound.new
  end

  def create
    @user = User.find(session[:user_id])
    if @user.username == true
      @game_round = GameRound.new(yahoo_api_params)
      if GameRound.find_by(id: @game_round.id)
        render new_game_round_path
      else
        @game_round.gather_yahoo_api_data
        @game_round.save
        redirect_to game_rounds_path
      end
    else
      redirect_to new_game_round_path
    end
  end

  def index
    @game_rounds = GameRound.all.sort_by{|game_round| game_round.name}
    @user = User.find(session[:user_id])
  end

  def show
    @game_round = GameRound.find(params[:id])
    @game_round_data = @game_round.gather_yahoo_api_data
    @user = User.find(session[:user_id])
    @user_games = UserGame.select{|user_game| user_game.game_id == @game.id}
  end

  private

  def yahoo_api_params
    params.require(:yahoo_api).permit(:underlying_asset_type, :time_values, :price_values, :name)
  end

end
