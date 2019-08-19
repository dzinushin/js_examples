
const sym1 = Symbol.for("symbol1");
const sym2 = Symbol("symbol1");

console.log("typeof sym1: ", typeof sym1);
console.log("sym1: ", sym1);
console.log("sym2: ", sym2);
console.log("sym1 === sym2: ", sym1 === sym2);

const ss = Symbol.for("symbol1");
console.log("ss === sym1: ", ss == sym1);