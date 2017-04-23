export const dateMagic = {
  getYearRange: (timeVals) => {
    return `${timeVals[0].slice(0, 4)} - ${timeVals[timeVals.length-1].slice(0, 4)}`
  },
  getSmallDate: (str) => str.slice(5, 9)

}

export const roundMagic = {
  round: (value, precision) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
}
