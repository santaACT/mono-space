class Article < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates :text, presence: true

  mount_uploader :img, ImgUploader

  def self.search(search)
    if search
      Article.where('text LIKE(?)', "%#{search}%")
    else
      Article.all
    end
  end

end
