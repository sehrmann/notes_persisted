class NotesController < ApplicationController
  def index
    @folder = Folder.find(params[:folder_id])
    @notes = @folder.notes
    render json: @notes
  end

  def show
    @note = Note.find(params[:id])
    render json: @note
  end

  def create
    @note = Note.new(note_params)
    respond_to do |format|
      format.html
      format.json {
        @note.save
      }
    end
  end


  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
  end

  private

  def note_params
    params.require(:note).permit(:body, :folder_id)
  end
end
