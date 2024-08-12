### Some more basics of js 

- Closures ke wajah se variables get stored in heap memory instead of stack memory (just partitions of RAM allocated to the browser) for inner functions to use them 

- Js uses prototype chaining instead of using Class based inheritance, prototype is a hidden property in every object which stores properties of Objects jinko chain kar rakha h current object se 

- Js has a garbage collector which automatically gives less memory to Objects which are not referenced in future lines of code

- Static methods in javascript are methods exclusive to classes and not the object instances of those classes

### browser webAPI, V8 engine, event loop, Task Ques, Call stacks

- first of all APIs is not limited to web only, like the APIs are set of protocols for different softwares to communicate 

- V8 engine uses our CPU to run js code to preview frontEnd accordingly, and these browsers provide some features like Task Ques, event loop, Call Stacks

- ab V8 engine ya fir some other engine which runs js on our CPU thread, has some partitions in its softwares which allows js language to run on multiple threads despite its single-threaded nature 

- and these webAPI are asked to run the async code on multiple threads while not disturbing the main thread of client's machine 

- Event loop is responsible for allocating the results of the async code to call stack when the callstack is empty

- call stack is the sequence of code that will run sequentially on the main thread, event loop

- Tasks Que is the space where the next functions that would be called are lined up (Task Que bharta hai samjho ki intrepret hote hi code add hojaata hai Task Que me fir baadme run hoga code call stack me like compile time is translation and runtime is running code)

### Regular Objects vs maps 

- Objects have key-value pairs jisme key values sirf string jaa sakte hai
- Maps can accomodate any type of dataType as its key

- Objects don't preserve the order of the key-value pair storing
- Maps preserve the order of key-value pairs that they formed

- Objects doesn't have some built-in methods which we create by ourselves while writing the code 
- Maps have inbuilt methods which can help in more efficient data handling for larger datasets like has, size, forEach (most important for looping over), etc.

- Objects ka memory allocation is unpredictable for large Objects which makes them less optimal for large datasets
- maps have consistent memory allocation which is better for large datasets

- Objects have prototype chaining, which makes it harder sometimes for adding certain properties to the Object since some properties may refer to other Objects chained to our original Object
- maps don't have anything like prototype chaining 

=> properties of map are not eligible for garbage collection since they're internally referenced to something else IDK this, and if we want that properties which are not manually referenced by the dev should be eligible for garbage collection then we use something like weakMap and weakSet for sets to make them efficient again

### async await and promises

- promises make async function calls more readable avoiding callback hell
- promise is an object which callbacks another executor function which is passed in the new Promise class, and this function executes the moment we create a promise, usually the function has some async function calls inside it, and whenever the async calls return the stuff as desired then .resolve() ke andar jo bhi input hua hoga usko pass karenge .then() ke andar passed function me 
- .reject() ke andar ka argument is passed in the .catch() method ke andar ka function on the promise Object
- .finally() on the original promise object humesha run hota hai, no matter what the status of the promise is

- isse hum .then() chaining kar sakte hai for multiple nested async calls inside each other, promise.then() tabhi hi execute hoga jab async call ka result aayega , yaani ek tarah se wait chal raha hoga

- so we usually do some code tasks and then write promise.then() jab uss async call ke output ki jarurat hogi

- async await syntax does this same thing, await ke aage koi async call yaa to directly hota h ya fir ek promise hota h jo wrapper hai for the async call

- async call se output barabar aaya to try run hoga, warna catch run hoga, and aisa try catch block likhna padta hai apne ko

### modularisation 

- so like export default karne se ek module me se ek hi chij export hogi and kuch bhi aur export nahi hoga, we do normal export too which helps in exporting multiple variables together 
- import karte wakt export default waali chij ko kuch bhi name se import kar sakte hai

### module bundler

- makes the react code written to transfer into single html, css and js files which browsers can understand 
- and the speed of the website or the complexity of the website can be measured by the network waterfall dev tool