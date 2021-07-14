class ItemsController < ApplicationController

  def app 
    render component: "App"
  end 

  def index
    @items = Item.order(likes: :desc)
    render json: @items
  end 

end
