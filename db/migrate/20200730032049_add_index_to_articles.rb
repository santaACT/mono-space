class AddIndexToArticles < ActiveRecord::Migration[5.2]
  def change
    add_index :articles, :text, length: 16
  end
end
