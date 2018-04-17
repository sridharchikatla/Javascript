let a = 1;
const function1 = function() {
  console.log(a);
  a = 2
}
a = 3;
const function2 = function() {
  console.log(a);
}
function1();
function2();