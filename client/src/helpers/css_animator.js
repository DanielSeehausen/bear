function cssFadeIn(element, duration) {
  element.animate([
    {transition: `visibility 0s ${duration/100}s, opacity ${duration/100}s linear`}
  ], {
    duration: duration, // ms
    easing: "linear",
    fill: "forwards"
  })
}

export const animations = {

  fadeOut: (element, duration) => {
    element.isArray ? element.each(el => cssFadeOut(el, duration)) : cssFadeOut(el, duration)
  },

  fadeIn: (element, duration) => {
    element.isArray ? element.each(el => cssFadeIn(el, duration)) : cssFadeIn(el, duration)
  }

}
