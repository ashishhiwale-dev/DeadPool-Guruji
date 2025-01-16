/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-value";
exports.ids = ["vendor-chunks/get-value"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-value/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-value/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/*!\n * get-value <https://github.com/jonschlinkert/get-value>\n *\n * Copyright (c) 2014-2015, Jon Schlinkert.\n * Licensed under the MIT License.\n */\n\nmodule.exports = function(obj, prop, a, b, c) {\n  if (!isObject(obj) || !prop) {\n    return obj;\n  }\n\n  prop = toString(prop);\n\n  // allowing for multiple properties to be passed as\n  // a string or array, but much faster (3-4x) than doing\n  // `[].slice.call(arguments)`\n  if (a) prop += '.' + toString(a);\n  if (b) prop += '.' + toString(b);\n  if (c) prop += '.' + toString(c);\n\n  if (prop in obj) {\n    return obj[prop];\n  }\n\n  var segs = prop.split('.');\n  var len = segs.length;\n  var i = -1;\n\n  while (obj && (++i < len)) {\n    var key = segs[i];\n    while (key[key.length - 1] === '\\\\') {\n      key = key.slice(0, -1) + '.' + segs[++i];\n    }\n    obj = obj[key];\n  }\n  return obj;\n};\n\nfunction isObject(val) {\n  return val !== null && (typeof val === 'object' || typeof val === 'function');\n}\n\nfunction toString(val) {\n  if (!val) return '';\n  if (Array.isArray(val)) {\n    return val.join('.');\n  }\n  return val;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXZhbHVlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHh3LWFpLWxhbmd1YWdlLXRlYWNoZXIvLi9ub2RlX21vZHVsZXMvZ2V0LXZhbHVlL2luZGV4LmpzP2JkZDciXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBnZXQtdmFsdWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2dldC12YWx1ZT5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHByb3AsIGEsIGIsIGMpIHtcbiAgaWYgKCFpc09iamVjdChvYmopIHx8ICFwcm9wKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHByb3AgPSB0b1N0cmluZyhwcm9wKTtcblxuICAvLyBhbGxvd2luZyBmb3IgbXVsdGlwbGUgcHJvcGVydGllcyB0byBiZSBwYXNzZWQgYXNcbiAgLy8gYSBzdHJpbmcgb3IgYXJyYXksIGJ1dCBtdWNoIGZhc3RlciAoMy00eCkgdGhhbiBkb2luZ1xuICAvLyBgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpYFxuICBpZiAoYSkgcHJvcCArPSAnLicgKyB0b1N0cmluZyhhKTtcbiAgaWYgKGIpIHByb3AgKz0gJy4nICsgdG9TdHJpbmcoYik7XG4gIGlmIChjKSBwcm9wICs9ICcuJyArIHRvU3RyaW5nKGMpO1xuXG4gIGlmIChwcm9wIGluIG9iaikge1xuICAgIHJldHVybiBvYmpbcHJvcF07XG4gIH1cblxuICB2YXIgc2VncyA9IHByb3Auc3BsaXQoJy4nKTtcbiAgdmFyIGxlbiA9IHNlZ3MubGVuZ3RoO1xuICB2YXIgaSA9IC0xO1xuXG4gIHdoaWxlIChvYmogJiYgKCsraSA8IGxlbikpIHtcbiAgICB2YXIga2V5ID0gc2Vnc1tpXTtcbiAgICB3aGlsZSAoa2V5W2tleS5sZW5ndGggLSAxXSA9PT0gJ1xcXFwnKSB7XG4gICAgICBrZXkgPSBrZXkuc2xpY2UoMCwgLTEpICsgJy4nICsgc2Vnc1srK2ldO1xuICAgIH1cbiAgICBvYmogPSBvYmpba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcblxuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpO1xufVxuXG5mdW5jdGlvbiB0b1N0cmluZyh2YWwpIHtcbiAgaWYgKCF2YWwpIHJldHVybiAnJztcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiB2YWwuam9pbignLicpO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-value/index.js\n");

/***/ })

};
;