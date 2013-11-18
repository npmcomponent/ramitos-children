# children

inspired by jQuery

## install

```bash
component install ramitos/children
```

## api

```js
var children = require('children')

var anchors = children(document.body, 'a')

var hrefs = anchors.map(function (anchor) {
  return anchor.href
})

var body_childrens = children(document.body)
```

## license

MIT