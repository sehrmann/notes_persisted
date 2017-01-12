class Note < ApplicationRecord
  belongs_to :folder
  
  validates :body, presence: true
end
