const _ = require("lodash");

const first = (arr) => arr[0];
const reverse = (arr) => arr.reverse();
const toUpper = (str) => str.toUpperCase();

const fn = _.flowRight(toUpper, first, [reverse]);
console.log(fn(["one", "two", "three"]));

function square(n) {
  return n * n;
}

var addSquare = _.flowRight(square, _.add);
console.log(addSquare(1, 2));
