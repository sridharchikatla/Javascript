// functions are assigned by value referece
function sayHello() {
    var a = 10;
    console.log("hello");
  };

var func = sayHello;
 
  
  console.log(func.a);
 

  console.log(sayHello.answer); // prints 42