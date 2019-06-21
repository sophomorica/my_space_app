Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do 
    resources :profiles
    get "my_profiles", to: "profiles#my_profiles"
    put "disliked/:id", to: "profiles#disliked"

    resources :profiles do
      resources :posts
    end
  end
end