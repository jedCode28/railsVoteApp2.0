class ItemsController < ApplicationController

  def app 
    render component: "App"
  end 

  def index
    @items = Item.order(likes: :desc)
    render json: @items
  end 

  def create 
    @item = Item.new(items_params)
    if @item.save
      render json: @item
    else 
      render json: {error:422, message: @item.errors.full_messages}
    end 
  end 

  def destroy
    @item = Item.find(params[:id]).destroy
    render json: @item
  end 

  private

  def items_params 
    params.require(:item).permit(:name, :description, :category, :likes)
  end 

end
