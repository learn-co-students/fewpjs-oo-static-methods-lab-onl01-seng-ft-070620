class Formatter {
  //add static methods here
  static capitalize(word)
  {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(sentence)
  {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = sentence.split(" ")
    for(let word of words)
    {
      if(word == words[0] || !(exceptions.includes(word)))
      {
        words[words.indexOf(word)] = this.capitalize(word)
      }
    }
    return words.join(" ")
  }
}