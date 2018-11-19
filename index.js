var _ = require('lodash');

module.exports = function shallowEqualWithout(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null) {
    return false;
  }

  var excludes = _.slice(arguments, 2);
  var keysA = _.without.apply(_, [_.keys(objA)].concat(excludes));
  var keysB = _.without.apply(_, [_.keys(objB)].concat(excludes));

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (var i = 0; i < keysA.length; i++) {
    if (!objB.hasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
};
