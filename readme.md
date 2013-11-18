# children

## install

```bash
component install ramitos/children
```

## api

```js
var children = require('children')

var anchors = children(document.body, 'a.myclass')

var hrefs = anchors.map(function (anchor) {
  return anchor.href
})

var all_the_els = children(document.body)
```

## license

MIT