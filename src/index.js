module.exports = function check(str, bracketsConfig) {
  const data = []
  const brackets = Object.fromEntries(bracketsConfig)

  for (const i of str.split('')) {
    if (data[0] === i) {
      data.shift();
    } else if (brackets[i]) {
      data.unshift(brackets[i]);
    } else {
      return false;
    }
  }

  return data.length === 0;
}
