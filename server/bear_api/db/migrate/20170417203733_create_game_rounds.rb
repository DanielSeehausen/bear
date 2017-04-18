class CreateGameRounds < ActiveRecord::Migration[5.0]
  def change
    create_table :game_rounds do |t|
      t.string :underlying_asset_type
      t.timestamp :time_values, array: true
      t.float :price_values, array: true
      t.string :name
    end
  end
end
