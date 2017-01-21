var flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

module.exports = function(str, char, ...replacers) {
    replacers = flatten(replacers);
    var res = str;
    replacers.forEach(function(replacer) {
        res = res.replace(char, replacer)
    });
    return res;
};
