Rails.application.routes.draw do

  root to: "static_pages#home"
  get '/feed' => 'static_pages#feed'
  
  namespace :api do
    #users
    post '/users' => 'users#create'
  
    #sessions 
    post '/sessions' => 'sessions#create'
    get '/authenticated' => 'sessions#authenticated'
    delete '/sessions' => 'sessions#destroy'
  
    #tweets
    post '/tweets' => 'tweets#create'
    delete '/tweets/:id' => 'tweets#destroy'
    get '/tweets' => 'tweets#index'
    get '/feed/:username' => 'static_pages#user'
    get '/tweets/search/:keyword' => 'tweets#search'
  end

  get '*path' => 'static_pages#home'
end
