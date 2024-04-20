/*

I test small blocks of code here from the big project, pretty basic way to debug though but yea learning more stuff to debug

*/

//onst fs = require("fs");
//onst z = require("zod";
//
//unction importDataFunction() {
// try {
//   return JSON.parse(fs.readFileSync("../files/todoServer.JSON", "utf-8"));
// } catch (err) {
//   console.log(err);
// }
//
//
//unction exportDataFunction(importData) {
// try {
//   fs.writeFileSync(
//     "../files/todoServer.JSON",
//     JSON.stringify(importData, null, 2)
//   );
// } catch (err) {
//   console.log(err);
// }
//
//
//et putParsedBody = {
// data: {
//   title: "Buy Gatorade",
//   completed: true,
// },
//;
//et IdNo = "aYPG";
//et importData = importDataFunction();
//or (let i = 0; i < importData.data.length; i++) {
// if (importData.data[i].Id == IdNo) {
//   let oldId = importData.data[i].Id;
//   importData.data[i] = putParsedBody.data;
//   importData.data[i].Id = oldId;
//   exportDataFunction(importData);
//   console.log("success");
// } else {
//   console.log("failure");
// }
//
//
const map = new Map();

map.set("name", "Monish")
map.set("age", "21")
map.set("sex", "male")

const myObj = {
  "name":"Monish",
  "age":21,
  "sex":"Male"
}

// iterating over objects and maps 

for (const [key, value] of map) {
  console.log(`the key of the map object is ${key} and the value of the map object is ${value}`)
}

for (const key of myObj) {
  console.log(key) // this would throw an error
}

for (const key in myObj) {
  console.log(key) // this won't throw an error but it can misbehave since this loop inherits properties from its proto-type
}