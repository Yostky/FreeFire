Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :users
      post 'register', to: 'auth#register'
      post 'login', to: 'auth#login'
      post 'refresh_token', to: 'authentication#refresh_token'
    end
  end  
end
