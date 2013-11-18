var matches = require('matches-selector')

// same code as jquery with just the adition of selector matching
module.exports = function (el, selector) {
  var n = el.firstChild
  var matched = [];

  for(; n; n = n.nextSibling) {
    if(n.nodeType === 1 && (!selector || (selector && matches(n, selector))))
      matched.push(n)
  }

  return matched
}