Rails.application.routes.draw do
  
  resources :users, only: [:show, :create]
  resources :coffees, only: [:index, :show, :create, :update]
  resources :reviews, only: [:show, :create, :update, :destroy]


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/profile', to: "users#show"

  get "/coffee", to: "coffees#index"
  get "/coffee/:id", to: "coffees#show"

 

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
