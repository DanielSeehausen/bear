Rails.application.routes.draw do
  root 'application#home'

  get '/users/:id/:username', to: "users#show"
  get '/game_rounds/:ticker', to: "game_rounds#serve_game_data"
  get '/users/record_game/:score/:user_id', to: "users#record_game"

end
