function outer() {
    let a = 42;
  function inner() {
      a = 43;
    }
  inner();
    console.log(a);
  }
  outer();