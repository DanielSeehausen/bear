class CreateGameData < ActiveRecord::Migration[5.0]
  def change
    create_table :game_data do |t|
      t.string :underlying_asset_type
      t.string :name
      t.timestamp[] :time_value
      t.float8[] :price_over_time

      t.timestamps
    end
  end
end
