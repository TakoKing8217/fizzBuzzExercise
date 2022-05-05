// Write your solution below this line:

// this solution uses just a for statement without bangs
for (let i = 1; i < 51; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else console.log(i);
}

// this solution uses just a while statement without bangs
// let i = 0;
// while (i < 50) {
//   i++;
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else console.log(i);
// }

// // this solution uses a for statement with bangs
// for (let i = 1; i < 51; i++) {
//   if (i % 3 !== 0 && i % 5 !== 0) {
//     console.log(i);
//   } else if (i % 5 !== 0) {
//     console.log("fizz");
//   } else if (i % 3 !== 0) {
//     console.log("buzz");
//   } else console.log("fizzbuzz");
// }
