class ArticlesController < ApplicationController
  before_action :set_article, only: [ :edit, :show]
  before_action :move_to_index, except: [ :index, :show]

  def index
    @article = Article.includes(:user).order("created_at DESC")

    respond_to do |format| 
      format.html
      format.json { @new_article = Article.where('id > ?', params[:id]) } 
    end
  end

  def new
    @article = Article.new
  end

  def create
    Article.create(article_params)
  end

  def destroy
    article = Article.find(params[:id])
    article.destroy
  end

  def edit
    @article.img.cache! unless @article.img.blank?
  end

  def update
    article = Article.find(params[:id])
    article.update(article_params)
  end

  def show
    @comment = Comment.new
    @comments = @article.comments.includes(:user)
  end

  private
  def article_params
    params.require(:article).permit(:image, :text, :youtube_url, :img, :img_cache, :remove_img).merge(user_id: current_user.id)
  end

  def set_article
    @article = Article.find(params[:id])
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end

end
