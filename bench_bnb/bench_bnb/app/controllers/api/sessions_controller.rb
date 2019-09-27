class Api::SessionsController < ApplicationController
  def show
  end
 
  def create

  end

  def destroy
    if !currentUser render json: errors.full_messages status: 404

    @user = User.find_by(params[:id])
    @user.destroy!
    render json:
  end
end
