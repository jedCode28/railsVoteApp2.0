class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :category
      t.string :name
      t.string :description
      t.integer :likes

      t.timestamps
    end
  end
end
