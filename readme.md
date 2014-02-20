*This repository is a mirror of the [component](http://component.io) module [ramitos/children](http://github.com/ramitos/children). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ramitos-children`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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