function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
        console.log("cursor is here");
        num++;        
      console.log(num);
    }
    console.log("cursor is outside the functions");
    console.log(num);
    num++;
    console.log(num);
   
    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); 