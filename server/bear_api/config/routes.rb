Rails.application.routes.draw do
  root 'application#home'

  get '/login', to: "sessions#new"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  resources :user_games
  resources :game_rounds, only: [:new, :index, :create, :show]
  resources :users, only: [:new, :index, :show, :create]
  resources :sessions, only: [:new, :create, :destroy]

end
