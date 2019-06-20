class Api::ProfilesController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_profile, only: [:show]
  
  def index
    # can view all profiles except the ones you liked index 
    # if current_user
    # render json: User.random_profile(current_user.liked_profiles)
    # else
      profiles = Profile.all
      render json: profiles.random_profile(profiles)
    # end

  end

  def show
    render json: @profile
  end


  def update
    current_user.liked_profiles << params[:id].to_i
    current_user.save
  end

  def update_profile
    
  end
  
  def my_profiles
    render json: User.liked(current_user.liked_profiles)
  end
  private
  def set_profile
    @profile = Profile.find(params[:id])
  end
end
