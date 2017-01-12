class FoldersController < ApplicationController
  def index
    @folders = Folder.all
    respond_to do |format|
      format.html
      format.json { render json: @folders }
    end
  end

  def create
  end

end
