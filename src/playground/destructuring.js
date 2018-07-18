// Object destructuring

// const person = {
//     name: 'Serhii',
//     age: 26,
//     location: {
//         city: 'Kiev',
//         temp: 12
//     }
// };
//
// const { name: testName = 'test', age } = person;
//
// console.log(`${testName} here ${age}`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: 'test title',
//     author: 'some name',
//     publisher: {
//         name: 'some publisherName'
//     }
// };
//
// const { name: publisherName = 'Self-publisheed' } = book.publisher;
//
// console.log(publisherName);

// Array destructuring

// const address = ['231 some address', 'Kiev', 'Type', 'zip'];
//
// const [, city, state = 'Washington'] = address;
//
// console.log(`You're here ${city} ${state}`);

const item = ['some', 'new', 'item', 'hello'];
const [first, , third] = item;
console.log(`Some test ${first} data ${third}`);