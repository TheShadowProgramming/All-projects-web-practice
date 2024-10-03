# Notes

- custom hook creation, and we end the names of these hook functions with js instead of jsx since it is clear that they usually run js only so need of html
- we create a seperate custom hooks folder where we save the hooks that we created

# .env variables 

- .env variables are variables which usually store global keys and permission variables which are usually used by the applications 
- we store these variables in a seperate file since we don't want to expose them while pushing them to open source repos
- and we include that .env file in the gitignore and share these permission keys usually with mail of encrypted messages so that it is not exposed 
- these env variables are pushed through github secrets or github actions and stuff in production for vercel deploying
- always name the .env file as it is don't name it as something else or the variables in the .env file won't be considered as env variables
- after importing 'dotenv/config', we can directly access the process.env.API_KEY aise attributes hai process.env object ka env variables in the .env file

# axios

- axios api ka get request returns as promise which we can use to deal with the promise acceptance and rejection using .then(),.catch(),.finally() blocks
- and like the promises are asynchronous in nature which means they make use of other threads under the hood in server side node.js environment
- and it uses web apis which runs the code in concurrent threads of the server where our code is hosted and these thread availibility is possible due to the C++ apis that we have on the node.js application 

# custom hook context

- we created the custom hook jo ek baar run hoga when the component mounts, and jab dependency variable ya fir component unmount hota hai tab ek cleanup function rahe 
- uske liye we created custom hook which uses useEffect and useState under the hood
- useEffect me fetch hoga and promise return hoga and usko we chain in the useEffect function itself

# Promises 

- So basically promises have their executor function which runs in the web apis at the instant when the promise is created 
- And we decide in the definition of the executor function when to resolve the promise or when to reject the promise
- and the arguments of the resolve and reject calls in the executor function are passed in the .then() and the .catch() blocks respectively
- if we want to chain the promises then we return the output of the then block of one promise into another promise and then decide in that new promise when to resolve it or reject it and like eventually use another .then() block under the first .then() block to make the callback hell look pretty 
- and this promise chaining is what makes the promise API a syntactic sugar for the callback hell 
- .then() of first promise and then .catch() of first means the resolve and reject functions of the first promise itself
- ab iske neeche if we insert another .then() block and another .catch() block to fir vo second promise ka hoga
- promise.all ka function basically accepts an array of promises and resolves with the same array of outputs of the promises passed in the promise.all function, and rejects even when one of the promise rejects

/// example code of promise.all
const promise1 = new Promise(resolve => setTimeout(() => resolve('One'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 3000));

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values)) // Output: ['One', 'Two', 'Three']
  .catch(error => console.error(error));
///

/// example code of promise chaining
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data
    setTimeout(() => resolve('Data fetched'), 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    // Simulate processing data
    if (data === 'Data fetched') {
      resolve('Data processed');
    } else {
      reject('Processing error');
    }
  });
}

fetchData()
  .then(data => {
    console.log(data);
    return processData(data);
  })
  .catch(error => {
    console.error(`Error in fetch or process: ${error}`);
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(`Final catch: ${error}`);
  });
///