/**
 * Copyright (c) 2015, Claudio Procida
 *
 * See LICENSE for licensing details.
 */

var test = require('tape'),
  sqr = require('.'),
  isSquare = sqr.isSquare,
  nearest = sqr.nearest;

test('sqr calculates squares of integers', function (t) {
  t.is(0, sqr(0));
  t.is(4, sqr(2));
  t.is(1, sqr(-1));

  t.end();
});

test('isSquare detects squares of integers', function (t) {
  t.true(isSquare(49));
  t.true(isSquare(36));
  t.true(isSquare(25));
  t.true(isSquare(16));
  t.true(isSquare(9));
  t.true(isSquare(4));
  t.true(isSquare(1));

  t.false(isSquare(48));
  t.false(isSquare(35));
  t.false(isSquare(24));
  t.false(isSquare(15));
  t.false(isSquare(8));
  t.false(isSquare(3));
  t.false(isSquare(2));

  t.end();
});

test('nearest finds nearest squares of integers', function (t) {
  t.is(49, nearest(52));
  t.is(36, nearest(39));
  t.is(25, nearest(30));
  t.is(16, nearest(19));
  t.is(9, nearest(11));
  t.is(4, nearest(6));
  t.is(1, nearest(2));

  t.is(49, nearest(44));
  t.is(36, nearest(32));
  t.is(25, nearest(24));
  t.is(16, nearest(15));
  t.is(9, nearest(8));
  t.is(4, nearest(3));

  t.is(49, nearest(49));
  t.is(36, nearest(36));
  t.is(25, nearest(25));
  t.is(16, nearest(16));
  t.is(9, nearest(9));
  t.is(1, nearest(1));

  t.end();
});

test('sqr throws if passed non numeric arguments', function (t) {
  t.throws(sqr.bind(null, 'a'));
  t.throws(sqr.bind(null, null));
  t.throws(sqr.bind(null, undefined));
  t.throws(sqr.bind(null, []));
  t.throws(sqr.bind(null, {}));

  t.end();
});
