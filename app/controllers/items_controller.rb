class ItemsController < ApplicationController

  def app 
    render component: "App"
  end 

  def index
    @items = Item.order(likes: :desc)
    render json: @items
  end 

  def destroy
    @item = Item.find(params[:id]).destroy
    render json: @item
  end 

end
