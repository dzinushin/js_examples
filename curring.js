// const greetCurried = function(greeting) {
//     return function(name) {
//         return greeting + ", " + name;
//     }
// }

// const greetHello = greetCurried("Hello");

// console.log(greetCurried("Hello")("Heidi"));
// console.log(greetHello("Heidi"));

const curryIt = function(uncurried) {
    const parameters = Array.prototype.slice.call(arguments, 1);
    console.log('parameters: ', parameters);
    // var parameters = arguments.slice(1);
    return function() {
        const callParams = parameters.concat(
            Array.prototype.slice.call(arguments, 0)
          );
          console.log("callParams: ", callParams);
      return uncurried.apply(null, callParams);
    };
  };

  const greeter = function(greeting, separator, emphasis, name) {
    console.log(greeting + separator + name + emphasis);
  };
  const greetHello = curryIt(greeter, "Hello", ", ", ".");
  greetHello("Heidi"); //"Hello, Heidi."
  greetHello("Heidi"); //"Hello, Eddie."