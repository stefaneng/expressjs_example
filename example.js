// Higher order functions in javascript

var f = function(g, x) {
  return g(x) + x;
};

var h = function(x) {
  return x + 3;
};


console.log(f(h, 4));
