class ContentsController < ApplicationController
  before_action :move_to_root_path, except: [:index, :new, :show]
  before_action :move_to_new_user_session_path, except: [:index, :create, :show, :destroy]
  before_action :authenticate_user, only: [:create, :destroy]

  def index
    @contents = Content.all.order("created_at DESC")
  end

  def new
    @content = Content.new
  end

  def create
    @content = Content.new(content_params)
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

  def destroy
    @content = Content.find(params[:id])
    if current_user.id == @content.user.id
      @content.destroy
      redirect_to root_path
    else
      render :show
    end
  end

  private

  def move_to_root_path
    redirect_to root_path if user_signed_in? == false
  end
  
  def content_params
    params.require(:content).permit(:title, :text).merge(user_id: current_user.id)
  end

  def move_to_new_user_session_path
    redirect_to new_user_session_path if user_signed_in? == false
  end

  def authenticate_user
    redirect_to root_path if user_signed_in? == false
  end
end
