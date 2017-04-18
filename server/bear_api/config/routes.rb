Rails.application.routes.draw do
  root 'application#home'

  resources :user_games
  resources :game_rounds, only: [:index]
  resources :users, only: [:create]
  resources :sessions, only: [:create, :destroy]

end
