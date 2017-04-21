export const stockDataController = {
  getStockDataByTicker: (ticker) => {
    gameData.stocks.forEach((stock) => {
      if (stock.ticker === ticker)
        return stock
    })
  },
  setStockData: (stock) => {
    // gameData.stocks.push(stock)
    // TODO move to store?
    localStorage.setItem(stock.company_name, stock)
  },
}


//
// Object
// asset_type
// :
// "equity"
// company_name
// :
// "Expedia"
// game_round_config
// :
// Object
// price_values
// :
// Array(230)
// status
// :
// "Found"
// ticker
// :
// "EXPE"
// time_values
// :
// Array(230)
