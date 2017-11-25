class CreateProject < ActiveRecord::Migration[5.1]
  def change
    create_table :skills do |t|
      t.string :title
      t.string :desc
      t.string :link_at
      t.string :img 

      t.timestamps
    end
  end
end
