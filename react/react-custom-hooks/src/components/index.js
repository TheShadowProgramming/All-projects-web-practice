import InputBox from "./InputBox";

// In this way we import all the components here in this index.js file, now in our app.jsx ew can directly import the components
// without thinking about the path of the components since we named the file as index.js so like even if we write import "CertainComponent" from ./Components, then too our result comes
// since we know that index.js is programmed to serve our file only

export default {InputBox}