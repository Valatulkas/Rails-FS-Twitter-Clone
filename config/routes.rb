Rails.application.routes.draw do

  root to: "static_pages#home"
  get '/feed' => 'feeds#feed'
  
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
    get '/users/:username/tweets' => 'tweets#index_by_user'
  end

  get '*path' => 'homepage#index'
end
