class StaticPagesController < ApplicationController

    def home
      render 'home'
    end
    
    def feed
      render 'feed'
    end

    def user
      @data = { user_username: params[:username] }.to_json
      render 'user'
    end
  
end