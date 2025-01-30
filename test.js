//===================MAP
// let arr = [1, 2, 3, 4]
//let newArr = arr.map(val=>val*2);
// let newArr = arr.map(function(val){
//   return val*2;
// });
// let newArr = arr.map(val => {
//   val += 1;
//   return val * 2;
// });

// let newArr = arr.map(doubleTheValue);
// function doubleTheValue(params) {
//   return params * 2;
// }
// console.log(newArr);


//===================FILTER
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter(val => val % 2 === 0);
// let newArr = arr.filter(val => {
//   if (val % 2 === 0) {
//     return val;
//   }
// });
// console.log(newArr);

//===================REDUCE
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = arr.reduce((acc, val) => {
  return acc + val;
}, 5);
console.log(sum);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);



//===================MAP_FILTER
