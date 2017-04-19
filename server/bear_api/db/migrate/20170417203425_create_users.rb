class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :games_played
      t.float :cumulative_performance

      t.timestamps
    end
  end
end
