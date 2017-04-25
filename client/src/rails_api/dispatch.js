import { stockDataController } from '../controllers/stockDataController.js'

const endpoint = 'beargame-api.herokuapp.com'
const defaultUserProfile = { msg_data: {
    status: "Newly Created",
    username: "Anon",
    unique_id: -1,
    games_played: 0,
    cumulative_performance: 0
  }
}

function setStockData(data) {
  data.msg_data.forEach((stock) => stockDataController.setStockData(stock))
}

function setUserProfile(data) {
  localStorage.setItem("gamesPlayed", data.msg_data.games_played)
  localStorage.setItem("cumulativePerformance", data.msg_data.cumulative_performance)
  if (data.msg_data.status === "Newly Created") {
    console.log("NEW USER!")
    localStorage.setItem("uniqueId", data.msg_data.unique_id)
    localStorage.setItem("username", data.msg_data.username)
    localStorage.setItem("gamesPlayed", data.msg_data.games_played)
  } else {
    console.log("Welcome back you gamer.")
  }
}

function setTemporaryUserProfile(err) {
  console.error(err, "USER PROFILE FAILED TO UPDATE..setting default user")
  setUserProfile(defaultUserProfile)
}

export const dispatch = {
  reconcileUserProfile: (username, uniqueId, status) => {
    // Ruby is passing data up as one of the two (depending on whether the user is found in database or not)
    // {msg_type: 'user_info', msg_data: {status: 'Newly Created', unique_id: @unique_id, username: "Anon", games_played: 0, cumulative_performance: 0}}
    // {msg_type: 'user_info', msg_data: {status: 'Found', games_played: @user.games_played, cumulative_performance: @user.cumulative_performance }}
    let path = `/users/${uniqueId}/${username}`
    $.getJSON(`${endpoint}${path}`).then((data) => setUserProfile(data), (err) => setTemporaryUserProfile(err))
  },

  reconcileStockData: (ticker) => {
    // get '/game_rounds/:ticker', to: "game_rounds#serve_game_data"
    // Accepts a ticker and returns the approx. past year of data
    // Example of return hash:
      //  {status: 'Found',
      //  asset_type: @game_round.asset_type,
      //  time_values: @game_round.time_values,
      //  price_values: @game_round.price_values,
      //  ticker: @game_round.ticker,
      //  company_name: @game_round.company_name,
      //  game_round_config: @@game_round_config}
    let path = `/game_rounds/${ticker}`
    $.getJSON(`${endpoint}${path}`).then((data) => setStockData(data), (err) => console.error(err, "UNABLE TO FETCH DEFAULT GAME DATA FROM API!"))
  }
}
