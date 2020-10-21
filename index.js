class Formatter {

  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    let newStr = str.match(/[a-zA-Z-' ]/g)
    if (!!newStr) {return newStr.join('')} else {return ''}
  }

  static titleize(str) {
    let leaves = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return str.split(' ').map((word, i) => {
      if (!leaves.includes(word) || i === 0) {
        return word[0].toUpperCase()+word.slice(1)
      } else {
        return word
      }
    }).join(' ')
  }

}