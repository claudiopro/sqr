/**
 * Copyright (c) 2015, Claudio Procida
 *
 * See LICENSE for licensing details.
 */

function check(x) {
  if (typeof x !== 'number') {
    throw 'not a number!';
  }
}

function sqr(x) {
  check(x);
  return x * x;
}

sqr.isSquare = function(y) {
  check(y);
  var x = Math.sqrt(y);
  return x === (x|0);
};

sqr.nearest = function(y) {
  check(y);
  var x = Math.sqrt(y)|0,
    x0 = x|0,
    y1 = x0 * x0,
    y2 = (1 + x0) * (1 + x0);
  return y - y1 > y2 - y ? y2 : y1;
};

module.exports = sqr;
