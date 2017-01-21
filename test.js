const strRender = require('./');

var greeting = "Hello %s, I'm %s";

var res = strRender(greeting, '%s','Mickey','Minnie');
console.log(res);
