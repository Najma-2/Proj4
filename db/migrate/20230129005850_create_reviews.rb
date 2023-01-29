class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :description
      t.belongs_to :coffee
      t.belongs_to :user

      t.timestamps
    end
  end
end
