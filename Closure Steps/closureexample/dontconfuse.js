// scope: global
//It’s common for closures to be confused with scopes


var a = 1;
void function one() {
  // scope: one
  // closure: [one, global]
  var b = 2;
  
  void function two() {
    // scope: two
    // closure: [two, one, global]
    var c = 3;
    
    void function three() {
      // scope: three
      // closure: [three, two, one, global]
      var d = 4;
      console.log(a + b + c + d); // prints 10
    }();
  }();  
}();
