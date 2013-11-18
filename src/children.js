module.exports = function (el, selector) {
  var children

  if(!selector) children = el.children
  else el.querySelectorAll(selector)

  return Array.prototype.slice.call(children, 0)
}