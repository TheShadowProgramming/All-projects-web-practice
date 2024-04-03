const fs = require("fs");
const z = require("zod");

function importDataFunction() {
  try {
    return JSON.parse(fs.readFileSync("../files/todoServer.JSON", "utf-8"));
  } catch (err) {
    console.log(err);
  }
}

function exportDataFunction(importData) {
  try {
    fs.writeFileSync(
      "../files/todoServer.JSON",
      JSON.stringify(importData, null, 2)
    );
  } catch (err) {
    console.log(err);
  }
}

let putParsedBody = {
  data: {
    title: "Buy Gatorade",
    completed: true,
  },
};
let IdNo = "aYPG";
let importData = importDataFunction();
for (let i = 0; i < importData.data.length; i++) {
  if (importData.data[i].Id == IdNo) {
    let oldId = importData.data[i].Id;
    importData.data[i] = putParsedBody.data;
    importData.data[i].Id = oldId;
    exportDataFunction(importData);
    console.log("success");
  } else {
    console.log("failure");
  }
}
