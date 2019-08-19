const salaryPropName = 'salary';
const id = Symbol('id');

const person = {
    [id]: 101,
    firstName: 'Den',
    'lastName': 'Haskell',
    dateOfBirth: '18.04.2010',
    friends: [ 'Bob', 'Alice'],
    [salaryPropName]: 10000,
    printFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};


console.log("person: ", person);
console.log("person.toString()", person.toString());
console.log("person.valueOf()", person.valueOf());
console.log(person.printFullName());
console.log(Object.getPrototypeOf(person));

console.log("'firstName' in person", 'firstName' in person);
console.log("'isPrototypeOf' in person", 'isPrototypeOf' in person);
console.log("'toString' in person", 'toString' in person);
console.log("'valueOf' in person", 'valueOf' in person);
console.log("'hasOwnProperty' in person", 'hasOwnProperty' in person);

console.log();
console.log('iterate through object keys')
for(const key in person) {
    const value = person[key];
    console.log(key, value);
}
console.log();
console.log('iterate through object keys using Object.entries:')
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}

console.log();
console.log('Reflect.ownKeys(person) : ', Reflect.ownKeys(person));

console.log();
const personCopy1 = JSON.parse(JSON.stringify(person))
console.log("personCopy1: ", personCopy1);

console.log();
const personCopy2 = {...person}
console.log("personCopy2: ", personCopy2);

console.log();
const personCopy3 = Object.assign({}, person)
console.log("personCopy3: ", personCopy3);
