export const stockDataController = {
  getStockDataByTicker: (ticker) => {
    gameData.stocks.forEach((stock) => {
      if (stock.ticker === ticker)
        return stock
    })
  },
  setStockData: (stock) => {
    // gameData.stocks.push(stock)
    localStorage.setItem(stock.company_name, stock)
  },
}
