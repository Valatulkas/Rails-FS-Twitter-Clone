class TweetsController < ApplicationController
    def index
        @tweets = Tweet.all.order(created_at: :desc)
        render 'tweets/index.jbuilder'
    end

    def index_by_user
        user = User.find_by(username: params[:username])

        if session
            @tweets = user.tweets
            render 'tweets/index.jbuilder'
        else
            render json: { tweets: [] }
        end
    end

    def create 
        token = cookies.signed[:twitter_session_token]
        session = Session.find_by(token: token)

        if session
            user = session.user
            @tweet = user.tweets.new(tweet_params)
        
            if @tweet.save
                render json: {
                  tweet: {
                    username: user.username,
                    message: 'Test Message'
                  }
                }
            else
                render json: { success: false }
            end    
                
        else
            render json: { success: false }
        end
    end

    def destroy
        token = cookies.signed[:twitter_session_token]
        session = Session.find_by(token: token)
        @tweet = Tweet.find_by(id: params[:id])

        if session and @tweet and @tweet.destroy
            render json: { success: true }
        else
            render json: { success: false }
        end
    end

    private

        def tweet_params
            params.require(:tweet).permit(:message)
            params.require(:tweet).permit(:id)
        end
end
