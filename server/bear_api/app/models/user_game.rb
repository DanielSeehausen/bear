class UserGame < ApplicationRecord
  belongs_to :game_round
  belongs_to :user
end
