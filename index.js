class Formatter {
// returns the same string with the first letter capitalized
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

// returns the string with all non-alphanumeric characters removed
// *except for dashes, apostrophes, and spaces
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]/g, '')
  }

// returns the string with all words capitalized except for...
// a, an, but, of, and, for, at, by, from...
// and the first word
  static titleize(str) {
    let conjunctions = ['the','a','an','but','of','and','for','at','by','from']
    let split = str.split(" ")

    let mapped = split.map(element => {
      if (split.indexOf(element) === 0) {
        return element.charAt(0).toUpperCase() + element.slice(1)
      } else if (conjunctions.includes(element)) {
        return element
      } else {
        return element.charAt(0).toUpperCase() + element.slice(1)
      }
    })
    return mapped.join(" ")
  }

}
