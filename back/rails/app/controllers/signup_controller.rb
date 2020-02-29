class SignupController < ApplicationController
    def signup
        #インスタンス変数に入れないと出力できない理由がわからん
        @user = User.find_by(email:params[:email])
        #p "params[:email]""
        #render plain: user
        #logger.debug('takamori')
        #render json: {email: params[:email], password: params[:password], username: params[:username]}
        #render json: @user
        if @user == nil
          User.create(email: params[:email],password: params[:password], name: params[:username])
          @create_user = User.find_by(email:params[:email])
          render status: 200, plain: @create_user.token
        else
          render status: 400, plain: 'そのユーザーは登録されています'
        end
      end
end
