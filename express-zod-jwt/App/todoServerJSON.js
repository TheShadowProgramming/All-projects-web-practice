// global variables storing libraries used
const express = require("express");
const bodyParser = require("body-parser");
const z = require("zod");
const fs = require("fs");
const app = express();
const jwt = require("jsonwebtoken");
const { switchCase } = require("@babel/types");
const { number } = require("yargs");
const secretKey = "monish";

// functions used to follow DRY principle
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

function findTodoIndex(importData, IdNo) {
  for (let i = 0; i < importData.data.length; i++) {
    if (importData.data[i].Id == IdNo) {
      return i;
    }
  }
}

function randomIdGenerator() {
  let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let randomId = "";
  for (let i = 0; i < 4; i++) {
    randomId += data[Math.floor(Math.random() * 62)];
  }
  return randomId;
}

// Middlewares used
function authUsingJWT(req, res, next) {
  if (req.body["token"]) {
    let token = req.body["token"];
    try {
      let decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).json({ msg: "Access denied, wrong token found" });
    }
  } else {
    res.status(401).json({
      msg: "Access denied, no JWT found, generate JWT using /login or /signup route",
    });
  }
}

app.use(express.json());
app.use(bodyParser.json());
// function to generate jwt for new users
app.get("/signup", (req, res) => {
  let importData = importDataFunction();
  let flag = true;
  for (let i = 0; i < importData.data.length; i++) {
    if (importData.data[i]["username"] == req.body["username"]) {
      res.status(409).json({ msg: "user already exists" });
      flag = false;
    }
  }
  if (flag) {
    req.body["Id"] = randomIdGenerator();
    importData.data.push(req.body);
    exportDataFunction(importData);
    let userObj = {
      user: req.body["username"],
    };
    jwt.sign(userObj, secretKey, (err, token) => {
      if (err) {
        res.status(500).json({ msg: "Error generating token" });
      } else {
        res.status(200).json(token);
      }
    });
  }
});

// route to generate jwt for already existing user
app.get("/login", (req, res) => {
  let importData = importDataFunction();
  let flag = false;
  for (let i = 0; i < importData.data.length; i++) {
    if (
      importData.data[i].username == req.query.u &&
      importData.data[i].password == req.query.p
    ) {
      flag = true;
      jwt.sign({ user: req.query.u }, secretKey, (err, token) => {
        if (err) {
          res.status(500).json({ msg: "Error generating token" });
        } else {
          res.status(200).send(token);
        }
      });
    }
  }
  if (!flag) {
    res.status(404).json({ msg: "incorrect password or username" });
  }
});

// middleware getting used in the further below routes to verify old users and generate jwt for them
app.use(authUsingJWT);

// routes handling users and their todos by using username, password attribute
app.get("/todos", (req, res) => {
  let username = req.user.user;
  let todoList = [];
  let importData = importDataFunction();
  for (let i = 0; i < importData.data.length; i++) {
    if (importData.data[i].username == username) {
      todoList.push(importData.data[i]);
    }
  }
  if (todoList) {
    res.status(200).json({ todoList });
  } else {
    res.status(404).json({ msg: "no user found with the given username" });
  }
});

app.get("/todos/:id", (req, res) => {
  let IdNo = String(req.params.id);
  let importData = importDataFunction();
  let exportTodoIndex = findTodoIndex(importData, IdNo);
  if (exportTodoIndex) {
    res.status(200).json(importData.data[exportTodoIndex]);
  } else {
    res
      .status(404)
      .json({ msg: "No Todo found with the given Id, check Id or try Again" });
  }
});

const postSchema = z.object({
  username: z.string(),
  password: z.string(),
  title: z.string(),
  completed: z.boolean(),
  description: z.string(),
});
app.post(`/todos`, (req, res) => {
  const parsedBody = postSchema.safeParse(req.body["todo"]);
  if (parsedBody.success) {
    parsedBody.data.Id = randomIdGenerator();
    let importData = importDataFunction();
    importData.data.push(parsedBody.data);
    exportDataFunction(importData);
    res.status(201).json({ id: parsedBody.data.Id });
  } else {
    res.status(400).json({ msg: "Invalid Inputs" });
  }
});

const putSchema = z.object({
  username: z.string(),
  password: z.string(),
  title: z.string(),
  completed: z.boolean(),
  Id: z.string(),
});
app.put("/todos", (req, res) => {
  const putParsedBody = putSchema.safeParse(req.body["todo"]);
  if (putParsedBody.success) {
    let IdNo = req.body["todo"]["Id"];
    let importData = importDataFunction();
    let TodoIndex = findTodoIndex(importData, IdNo);
    if (TodoIndex) {
      importData.data[TodoIndex] = putParsedBody.data;
      exportDataFunction(importData);
      res.status(200).json({ msg: "Todo Updated" });
    } else {
      res.status(404).json({
        msg: "No Todo Found with the given Id, check Id or try again",
      });
    }
  } else {
    res.status(400).json({ msg: "Invalid inputs" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const IdNo = req.params.id;
  const importData = importDataFunction();
  const todoIndex = findTodoIndex(importData, IdNo);
  if (todoIndex) {
    importData.data = importData.data.filter((todo) => {
      if (!(todo.Id == IdNo)) {
        return true;
      }
    });
    exportDataFunction(importData);
    res.status(200).json({ msg: "Todo Deleted" });
  } else {
    res.status(404).json({
      msg: "No Todo Found with the given Id, please check Id or try again later",
    });
  }
});

// global catch to deal with uncertain errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Internal Server Error" });
});

app.listen(4500);
module.exports = app;

// Debouncing is limiting time-consuming tasks to fire
