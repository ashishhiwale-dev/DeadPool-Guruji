"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mixin-deep";
exports.ids = ["vendor-chunks/mixin-deep"];
exports.modules = {

/***/ "(ssr)/./node_modules/mixin-deep/index.js":
/*!******************************************!*\
  !*** ./node_modules/mixin-deep/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isExtendable = __webpack_require__(/*! is-extendable */ \"(ssr)/./node_modules/is-extendable/index.js\");\nvar forIn = __webpack_require__(/*! for-in */ \"(ssr)/./node_modules/for-in/index.js\");\n\nfunction mixinDeep(target, objects) {\n  var len = arguments.length, i = 0;\n  while (++i < len) {\n    var obj = arguments[i];\n    if (isObject(obj)) {\n      forIn(obj, copy, target);\n    }\n  }\n  return target;\n}\n\n/**\n * Copy properties from the source object to the\n * target object.\n *\n * @param  {*} `val`\n * @param  {String} `key`\n */\n\nfunction copy(val, key) {\n  if (!isValidKey(key)) {\n    return;\n  }\n\n  var obj = this[key];\n  if (isObject(val) && isObject(obj)) {\n    mixinDeep(obj, val);\n  } else {\n    this[key] = val;\n  }\n}\n\n/**\n * Returns true if `val` is an object or function.\n *\n * @param  {any} val\n * @return {Boolean}\n */\n\nfunction isObject(val) {\n  return isExtendable(val) && !Array.isArray(val);\n}\n\n/**\n * Returns true if `key` is a valid key to use when extending objects.\n *\n * @param  {String} `key`\n * @return {Boolean}\n */\n\nfunction isValidKey(key) {\n  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';\n};\n\n/**\n * Expose `mixinDeep`\n */\n\nmodule.exports = mixinDeep;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWl4aW4tZGVlcC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxrRUFBZTtBQUMxQyxZQUFZLG1CQUFPLENBQUMsb0RBQVE7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxHQUFHO0FBQ2YsWUFBWSxRQUFRO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHh3LWFpLWxhbmd1YWdlLXRlYWNoZXIvLi9ub2RlX21vZHVsZXMvbWl4aW4tZGVlcC9pbmRleC5qcz85ZTdjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGlzRXh0ZW5kYWJsZSA9IHJlcXVpcmUoJ2lzLWV4dGVuZGFibGUnKTtcbnZhciBmb3JJbiA9IHJlcXVpcmUoJ2Zvci1pbicpO1xuXG5mdW5jdGlvbiBtaXhpbkRlZXAodGFyZ2V0LCBvYmplY3RzKSB7XG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpID0gMDtcbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgIGZvckluKG9iaiwgY29weSwgdGFyZ2V0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBDb3B5IHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlIG9iamVjdCB0byB0aGVcbiAqIHRhcmdldCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7Kn0gYHZhbGBcbiAqIEBwYXJhbSAge1N0cmluZ30gYGtleWBcbiAqL1xuXG5mdW5jdGlvbiBjb3B5KHZhbCwga2V5KSB7XG4gIGlmICghaXNWYWxpZEtleShrZXkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG9iaiA9IHRoaXNba2V5XTtcbiAgaWYgKGlzT2JqZWN0KHZhbCkgJiYgaXNPYmplY3Qob2JqKSkge1xuICAgIG1peGluRGVlcChvYmosIHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpc1trZXldID0gdmFsO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGB2YWxgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHthbnl9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIGlzRXh0ZW5kYWJsZSh2YWwpICYmICFBcnJheS5pc0FycmF5KHZhbCk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGBrZXlgIGlzIGEgdmFsaWQga2V5IHRvIHVzZSB3aGVuIGV4dGVuZGluZyBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYGtleWBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEtleShrZXkpIHtcbiAgcmV0dXJuIGtleSAhPT0gJ19fcHJvdG9fXycgJiYga2V5ICE9PSAnY29uc3RydWN0b3InICYmIGtleSAhPT0gJ3Byb3RvdHlwZSc7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgbWl4aW5EZWVwYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gbWl4aW5EZWVwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mixin-deep/index.js\n");

/***/ })

};
;