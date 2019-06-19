Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do 
    resources :profiles
    get "my_profiles", to: "profiles#my_profiles"
  end
  
end
