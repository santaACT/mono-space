Rails.application.routes.draw do
  devise_for :users
  root to: 'articles#index'


  resources :users, only: :show

  namespace :articles do
    resources :searches, only: :index
  end

  resources :articles do
    resources :comments, only: :create
  end
end
