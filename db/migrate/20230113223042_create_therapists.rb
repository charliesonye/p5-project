class CreateTherapists < ActiveRecord::Migration[6.1]
  def change
    create_table :therapists do |t|
      t.string :name
      t.string :title
      t.string :specialty

      t.timestamps
    end
  end
end
