export const animations = {

  fadeOut: (element, duration) => {
    if (Array.isArray(element)) {
      element.each(el => {
        el.style.pointerEvents = "none"
        el.style.opacity = 0
      })
    } else {
      element.style.pointerEvents = "none"
      element.style.opacity = 0
    }
  },

  fadeIn: (element, duration) => {
    if (Array.isArray(element)) {
      element.each(el => {
        el.style.pointerEvents = "auto"
        el.style.opacity = 1
      })
    } else {
      element.style.pointerEvents = "auto"
      element.style.opacity = 1
    }
  }

}
