Rails.application.routes.draw do
  resources :users
  resources :posts
  #post 'login/login'
  post 'api/signup', to: 'signup#signup'
  post 'api/login', to: 'login#login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
