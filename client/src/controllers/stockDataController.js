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
