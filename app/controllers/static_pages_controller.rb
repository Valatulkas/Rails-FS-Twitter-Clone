class StaticPagesController < ApplicationController

    def login
      render 'home'
    end
    
    def feed
      render 'feed'
    end

end