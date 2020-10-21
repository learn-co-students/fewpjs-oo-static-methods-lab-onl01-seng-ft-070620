class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(str) {
    return str.split(" ").map(function(w, i) {
      if (!/^(the|a|an|but|of|and|for|at|by|from)$/.test(w) || i === 0) {
        return Formatter.capitalize(w)
      } else {
        return w
      }
    }).join(" ")
  }

}