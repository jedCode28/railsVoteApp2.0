class ItemsController < ApplicationController


  ### just to get started, using ssrr
  def app 
    render component: "App"
  end 

  
  ### These are rendering JSON to the front end, basically API calls
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

  def update
    @item = Item.find(params[:id])

    if(@item.update(items_params))
      render json: @item
    else
      render json: {error: 422, message: @item.errors.full_messages}
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
