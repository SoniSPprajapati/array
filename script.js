// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }
// const result = addTwoNumbers(6,8);
// console.log(result);

// function userLoginMsg(username = "RAV") {
//   if (username === undefined) {
//     console.log("Please enter your name");
//     return
//   }
//   return `${username} you just loogged`;
// }
// const userMsg = userLoginMsg();
// console.log(userMsg);

//rest Operator

// function calCartPrice(...num){
//     return num
// }
// console.log(calCartPrice(400, 5677, 270,567));

// Object use in function

// const user = {
//   userName: "Soni",
//   productPrice: 399,
// };

// function useObject(newObj) {
//  console.log(`user name is ${newObj.userName} and price is ${newObj.productPrice}`) ;
// }
// useObject(user);


// how to array used in function

const newArray = [200,500.345,678,10]

function getSecondNewArray(getArray) {
   return getArray[6]
}
console.log(getSecondNewArray(newArray));


