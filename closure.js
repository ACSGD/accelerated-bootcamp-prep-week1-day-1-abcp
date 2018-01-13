function parent() {
  var innerVariable = "Go to your room!";
  //
  var childFunction = parent();
  return function child() {
    return innerVariable;
  }
}

var outerScope = parent;

var innerScope = outerScope();

innerScope();


