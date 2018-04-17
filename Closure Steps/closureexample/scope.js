function printA() {
    console.log(answer);
    var answer = 1;
  };
  printA(); // this creates a scope which gets discarded right after
  printA(); // this creates a new different scope which also gets discarded right after;