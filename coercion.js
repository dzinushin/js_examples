// trivial case
const box = {
    l: 7,
    w: 3,
    h: 4,
    valueOf: function() {
      return this.l * this.w * this.h
    },
    toString : function () {
      return `l: ${this.l} w: ${this.w} h: ${this.h}`
    }

}

console.log('box: ', box);
console.log('box as string: ', String(box));
console.log('box as value: ', box.valueOf());
console.log('box as value: ', +box);
console.log('------------------------------------------------------------------------');

const poly = {
  valueOf() { return 99 }, // never called
  toString() { return 'toString' }, // never called
  [Symbol.toPrimitive](h) {
    return h === 'number' ? 42 :
      h === 'string' ? 'toPrimitive' : 
      null
  }
}
console.log(Number(poly))
// 42
console.log(String(poly))
// 'toPrimitive'
console.log(poly + '')
// 'null'
console.log('------------------------------------------------------------------------');

const tom = {
  name: 'Thomas',
  dob: new Date('1986-04-01'),
  toJSON: function() {
    return {
      name: this.name,
      birthday: this.dob.toISOString().split('T')[0]
    }
  }
}
console.log(JSON.stringify(tom))
// '{"name":"Thomas","birthday":"1986-04-01"}'