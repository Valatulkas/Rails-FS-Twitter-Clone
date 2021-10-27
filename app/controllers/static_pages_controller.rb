class StaticPagesController < ApplicationController

    def home
      render 'home'
    end
    
    def demo
      render 'demo'
    end
  
end