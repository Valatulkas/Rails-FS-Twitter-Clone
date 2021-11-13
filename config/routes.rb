Rails.application.routes.draw do

  root to: "static_pages#home"
  
  namespace :api do
    get 'feed' => 'feeds#feed'

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
    get '/users/:username/tweets' => 'tweets#index_by_user'
  
    get 'feed/*uri' => 'feeds#feed'
  end
end
