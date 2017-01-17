class FoldersController < ApplicationController
  def index
    @folders = Folder.all
    @notes = Note.all
    @data = { folders: @folders, notes: @notes }
    respond_to do |format|
      format.html
      format.json { render json: @data }
    end
  end

  def create
  end

end
