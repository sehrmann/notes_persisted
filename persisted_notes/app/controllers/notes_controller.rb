class NotesController < ApplicationController
  def index
    @folder = Folder.find(params[:folder_id])
    @notes = @folder.notes
    render json: @notes
  end

  def create
  end


  def update
  end

  def delete
  end
end
