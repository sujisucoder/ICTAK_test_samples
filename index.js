//1. Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
/*
let numArray = [11,6,2,7,71]

function primeCheck(numbers) {
   console.log(numbers);
   let i=0;
   while(i<numArray.length){
      if(numArray[i]==2||numArray[i]%2!=0){
         console.log("prime number",numArray[i]);

      }else{
         console.log("not prime number",numArray[i]);

      }
      i++;
   }
}
primeCheck(numArray);

*/

//2. Write a JavaScript program to find the most frequent item of an array

//let array = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5];


// 3. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.
/*
function oddEvenCheck() {
   for (let i = 0; i <= 15; i++) {
      if (i%2==0) {
         console.log(i,"is even");
      } else {
         console.log(i,"is odd");
         
      }      
   }
}
oddEvenCheck();
*/

//4. Write a JavaScript program to find the sum of squares of the elements of an array.

let array1 = [1,2,3,4,5]
let sum = 0;
for (elem of array1 ){
   sum = sum+elem*elem;
}
console.log(sum);













// write a program for printing a numbers from 1 to 10

// for (let i=1; i<=10; i++){
//     console.log("number is ",i)
// }

// create an array with 5 elements and print all the elements in the array 



// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 
// }
// let arr = [1,2,3,4,5];
// let i=0;
// while ( i<arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// let person = {
//     name:'sujith',
//     age:21,
//     gender:'male'
// }

// for(item in person){
//     console.log(person[item]);
// }

// let arr = [1,2,3,4,5,6];
//  let i=0;

//  do {
//     console.log(i);
//     i++;
//  } while ( i<arr.length)

// // for in - array
// let primes = [2,3,5,7,11]

// for (let field in primes ){
//    console.log(primes[field]);
// }

// // for of - array

// for(let field of primes){
//    console.log(field);
// }