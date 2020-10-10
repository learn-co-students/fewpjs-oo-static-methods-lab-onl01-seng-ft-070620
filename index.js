class Formatter {
  static capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  static sanitize(input) {
    return input.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(input) {
    const nonCaps = ["a", "an", "but", "of", "and", "for", "at", "by", "the", "from"]
    const newArray = []
    let sentenceArray = input.split(" ")
    for (let i = 0; i < sentenceArray.length; i++) {
      if (i === 0) {
        newArray.push(this.capitalize(sentenceArray[i]));
      } else {
        if (nonCaps.includes(sentenceArray[i])) {
          newArray.push(sentenceArray[i]);
        } else {
          newArray.push(this.capitalize(sentenceArray[i]));
        }
      }
    }
    return newArray.join(" ");
  }
}