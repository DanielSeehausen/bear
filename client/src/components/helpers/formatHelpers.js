export const dateMagic = {
  getYearRange: (timeVals) => {
    return `${timeVals[timeVals.length-1].slice(0, 4)} - ${timeVals[0].slice(0, 4)}`
  },
  getSmallDate: (str) => str.slice(0, 7),
  getYear: (str) => str.slice(0, 4)
}

export const roundMagic = {
  round: (value, precision) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  },
  roundToKString: (value) => {
    return `${Math.floor(value/1000)}K`
  }
}
