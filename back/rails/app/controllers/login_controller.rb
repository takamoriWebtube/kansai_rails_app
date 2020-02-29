class LoginController < ApplicationController
  def login
    #インスタンス変数に入れないと出力できない理由がわからん
    @user = User.find_by(email:params[:email])

    if @user.password != params[:passwd]
      render status: 400, plain: '入力内容を確認してください'
    else
      render status: 200, plain: @user.token
    end
  end
end
