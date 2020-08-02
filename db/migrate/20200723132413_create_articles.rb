class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :text
      t.text :image
      t.string :youtube_url

      t.timestamps
    end
  end
end
