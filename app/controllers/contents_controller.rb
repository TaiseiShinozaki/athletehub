class ContentsController < ApplicationController
  before_action :move_to_root_path, except: [:index, :show]

  def index
    @contents = Content.all.order("created_at DESC")
  end

  def new
    @content = Content.new
  end

  def create
    @content = Content.new(content_params)
    #binding.pry
    if @content.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @content = Content.find(params[:id])
    @comment = Comment.new
    @comments = @content.comments.includes(:user).order("created_at DESC")
  end

  private
  def move_to_root_path
    redirect_to root_path if user_signed_in? == false
  end
  
  def content_params
    params.require(:content).permit(:title, :text).merge(user_id: current_user.id)
  end

end
