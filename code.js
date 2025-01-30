/////// =============MAPS

// Q1 
// let a = [1, 2, 3, 4, 5]
// let b = a.map(val=>val*val)
// console.log(b);

// Q2
// let a = [0, 20, 100]
// let b = a.map(val=>val * 9/5 + 32)
// console.log(b);

// Q3
// let a = ["apple", "banana", "cherry"]
// let b = a.map(val=>val.length)
// console.log(b);

// Q4
// let a = ["1", "2", "3"]
// let b = a.map(val=>parseInt(val))
// console.log(b);

// Q5
// let a = ["hello", "world"]
// let b = a.map(val=>val.toUpperCase())
// console.log(b);



// //===================FILTER

// Q1
// let a = [1, 2, 3, 4, 5, 6]
// let b = a.filter(val=>val%2===0)
// console.log(b);

// Q2
// let a = ["apple", "", "banana", "", "cherry"]
// let b = a.filter(val=> val.length>0)
// console.log(b);

// Q3
// let a = [4, 11, 15, 7, 2, 20]
// let b = a.filter(val=>val>10)
// console.log(b);

// Q4
// let a = ["apple", "banana", "avocado", "berry"]
// let b = a.filter(val=>val.startsWith("a"))
// console.log(b);

// Q5
// let a = ["madam", "racecar", "hello", "world"]
// let b = a.filter(val=> val === val.split("").reverse().join(""))
// console.log(b);


//===================REDUCE

// Q1
// let a = [1, 2, 3, 4, 5]
// let b = a.reduce((acc, val) => acc + val)
// console.log(b);

// Q2
// let a = [1, 2, 3, 4]
// let b = a.reduce((acc, val) => acc * val)
// console.log(b);

// Q3
// let a = [4, 5, 1, 9, 2]
// let b = a.reduce((acc, val) => acc > val ? acc : val)
// console.log(b);

// Q4
// let a = ["hello", "world"]
// let b = a.reduce((acc, val)=> acc + val)
// console.log(b);

// Q5                       
// let a = ["apple", "banana", "kiwi"]
// let b = a.reduce((acc, val) => acc + val.length, 0)
// console.log(b);


//===================MAP & FILTER

// Q1
// let a = [1, 2, 3, 4, 5, 6]
// let b = a.filter(val=>val%2 == 0).map(val=>val*val)
// console.log(b);


// Q2
// let a = [-1, 0, 5, -2, 3]
// let b = a.filter(val=> val>0).map(val=>val.toString())
// console.log(b);

// Q3
// let a = ["apple", "fig", "banana", "kiwi"]
// let b = a.filter(val=>val.length>4).map(val=>val.toUpperCase())
// console.log(b);


// Q4
// let a = [1, 4, 9, 16, 25]
// let b = a.filter(val=>val%2==0).map(val=>Math.sqrt(val))
// console.log(b);


// Q5                     **********************                                            
let a = ["apple", "banana", "orange", "grape"]
let b = a.filter(val=>val.startsWith([("a"),("e"),("i"),("o"),("u")]))

console.log(b);











// let a = [2,3,4,5,2,4]
// for (i = 0; i<a.length; i++){
//     for (j = i+1; j<a.length; j++){
//         if (a[i] == a[j]){
//             console.log(a[i]);
//         }
//     }
// }



