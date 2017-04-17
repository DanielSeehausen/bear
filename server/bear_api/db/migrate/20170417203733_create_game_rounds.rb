class CreateGameRounds < ActiveRecord::Migration[5.0]
  def change
    create_table :game_rounds do |t|
      t.string :underlying_asset_type
      t.timestamp[] :time_values
      t.float8[] :price_over_time
      t.string :name

      t.timestamps
    end
  end
end
