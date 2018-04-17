//Closures span multiple scopes
/*
A closures encompasses everything the defined function can access. 
This means the defined function’s scope, and all the nested scopes between the 
global scope and the defined function scope plus the global scope itself.*/


var G = 'G';
// Define a function and create a closure
function functionA() {
  var A = 'A'
  
  // Define a function and create a closure
  function functionB() {
    var B = 'B'
    console.log(A, B, G);
  }
  
  functionB();  // prints A, B, G
  // functionB closure does not get discarded
  A = 42;
  functionB();  // prints 42, B, G
}

functionA();