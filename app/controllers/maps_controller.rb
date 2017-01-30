class MapsController < ApplicationController
  before_action :set_location, only: [:create]
  def index

  end

  def create
    @location.save
  end

  private

  def location_params
    params.require(:location).permit(:lat, :lng)
  end

  def set_location
    @location = if current_user.location.nil?
                  current_user.build_location(location_params)
                else
                  current_user.location.assign_attributes(location_params)
                end
  end
end
