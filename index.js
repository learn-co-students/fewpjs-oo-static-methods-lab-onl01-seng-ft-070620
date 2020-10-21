// pry = require('pryjs')

class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exceptions = [ "the", "a", "an", 'but', 'of', 'and', 'for', 'at', 'by', 'from' ] 
    let titled = []
    let splitString = string.split(" ")
    for (let word of splitString) {
          if (word === splitString[0]) {
            titled.push(this.capitalize(word))
          } else if(exceptions.includes(word)) {
            titled.push(word)
          } else {
            titled.push(this.capitalize(word))
          }
    }
    return titled.join(" ")
  }
}