class Formatter {
  static capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase())
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let noTouchie = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = [];
    let theString = string.split( " " )
    for (let n = 0; n < theString.length; n++) {
      if (n == 0) {
        words.push(this.capitalize(theString[n]))
      } else {
        if (noTouchie.includes(theString[n])) {
          words.push(theString[n])
        } else {
          words.push(this.capitalize(theString[n]))
        }
      }

    }
    return words.join(" ");
  }
}