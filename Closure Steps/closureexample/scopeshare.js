/*Since closures give us access to nested scopes at the time we define functions, 
when we define multiple functions in the same scope, 
that scope is shared among all created closures, 
4 and of course, because of this, 
the global scope is always shared among all closures.*/

function parent() {
    let a = 10;
    
    function double() {
      a = a+a;
     console.log(a);
    };
    
    function square() {
      a = a*a;
     console.log(a);
    }
    
    return { double, square }
  }
  let { double, square } = parent();
  double(); // prints 20
  square(); // prints 400
  double(); // prints 800