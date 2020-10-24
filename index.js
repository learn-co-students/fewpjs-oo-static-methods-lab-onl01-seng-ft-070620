class Formatter {
  static capitalize(str) {
    return str = str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(str) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const wordArr = str.split(' ')
    const result = []
    for (let i = 0; i < wordArr.length; i++) {
      if (i === 0) {
        result.push( this.capitalize(wordArr[i]) )
      }
      else {
        if (exceptions.includes( wordArr[i])) {
          result.push(wordArr[i])
        }
        else {
          result.push(this.capitalize(wordArr[i]))
        }
      }
    }
    return result.join(' ')
  }
}