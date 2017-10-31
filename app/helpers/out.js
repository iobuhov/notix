'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pickPropsOf;

var _ramda = require('ramda');

function pickPropsOf(cls, props, filter) {
  var filterFunc = function () {
    if (typeof filter === 'undefined') {
      return function () {
        return true;
      };
    } else if (Array.isArray(filter)) {
      return function (x) {
        return !filter.indexOf(x) > -1;
      };
    } else if (typeof filter === 'function') {
      return filter;
    }
  }();

  var clsPropsNames = Object.keys(cls.propTypes).filter(filterFunc);

  return (0, _ramda.pick)(clsPropsNames, props);
}
