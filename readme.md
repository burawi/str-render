# Installation

```
npm install str-render
```

# Usage

**_This is wrote following the [OADS Standards](https://github.com/ODNA/OADS)._**

```javascript
strRender("template","replaced",..."['replacers']") => "renderedString"
```

Replaces a string by multiple string in ordered way.
- "template": The original string.
- "['replaced']": The string you want to be replaced.
- ...replacers: The replacers strings.

Eg:

```javascript
var strRender = require('str-render');
var greeting = "Hello %s, I'm %s";

var str = strRender(greeting, '%s','Mickey','Minnie');
// str: Hello Mickey, I'm Minnie
```
