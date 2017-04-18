Rails.application.routes.draw do
  root 'application#home'

  get '/login', to: "sessions#new"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  resources :user_games
  resources :game_rounds, only: [:index]
  resources :users, only: [:create]
  resources :sessions, only: [:create, :destroy]

end
