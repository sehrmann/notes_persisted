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
    @folder = Folder.new(folder_params)
    respond_to do |format|
      format.html
      format.json {
        @folder.save
      }
    end
  end

  private

  def folder_params
    params.require(:folder).permit(:name)
  end
end
