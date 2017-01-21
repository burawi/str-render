module.exports = function(str, char, ...replacers) {
    var res = str;
    replacers.forEach(function(replacer) {
        res = res.replace(char, replacer)
    });
    return res;
};
