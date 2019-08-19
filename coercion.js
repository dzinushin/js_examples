
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

