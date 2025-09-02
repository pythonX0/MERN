//array
const fruits = [
  'apple', 'banana', 'orange', 'mango', 'grape', 'pineapple',
  'kiwi', 'pear', 'peach', 'plum', 'cherry', 'watermelon',
  'papaya', 'blueberry', 'strawberry', 'raspberry', 'lemon', 'lime'
];

console.log(`fruits: ${fruits.join(' x ')}`);
console.log(`Number of fruits: ${fruits.length}`);
console.log(`First fruit: ${fruits[2]}`);
console.log(`Last fruit: ${fruits[fruits.length - 1]}`);
fruits.push('dragonfruit');
fruits.unshift('coconut');
console.log(`index of mango: ${fruits.indexOf('mango')}`);
console.log(`Total fruits after adding: ${fruits.length}`);