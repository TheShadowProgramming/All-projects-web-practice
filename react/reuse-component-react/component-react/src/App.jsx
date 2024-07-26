import "./index.css";
import Card from "./reusable-card.jsx";
import CardChildren from "./card-children.jsx";

function App() {
  return (
    <>
      <div className="travel-card-menu">
        <Card>
          {" "}
          {
            // props.children start here
          }
          <CardChildren name="someRandomName" />{" "}
          {
            // we're passing name value as key of the props that will be used further
          }
          {
            // props.children end here
          }
        </Card>

        <Card>
          <CardChildren name="someRandomName2" />
        </Card>

        <Card>
          <CardChildren name="someRandomName3" />
        </Card>
      </div>
    </>
  );
}

// rafce is shortcut to make a react component where we're importing react and then exporting the component too
// it's better to make a components folder in the src folder where we'll write code for every component, and seperate styling for every component
// react bootstrap if the framework to bootstrap your react project, react bootstrap se components utha rahe to
// className keyword
// ye bhadwa windows me case insesitivity hai bc, matlab windows considers capital letter file same as small letter file
// use react bootstrap only for styling react components since react bootstrap under the hood uses virtual DOM and the actual DOM
// react snippets extension for rfce and other shortcut keys, control + space for some component that we haven't imported yet
// that will automatically write the import statement for that component
// react bootstrap se components import karo, fir individual component files ke css files se style karo

// NOTES FROM PARAM-REACT PROJECT :-

// start with installing react-bootstrap using the command in docs
// then include the cdn link tag od font-awesome and google fonts if you want, also include the reactBootstrap css link tag
// search the docs for the components that you like and then use the import statements from the top of the docs
// check each component for specific learning
// the # tags that are included in the hrefs of different navbar.link components will redirect user to the element with that id
// and in this way the page becomes a single page application

// useEffect hook introduction :-

// useEffect hook is used to run some code after a certain side effect in the website
// like if state changes then useEffect hook will run, like if the page renders then the useEffect hook works
// it takes 2 arguments, one being the callback function inside which the code is present
// which is supposed to run after our desired side Effect happens
// and the second argument describes when the useEffect would come into action
// it must be an array of dependencies(basically variables) which when changed, useEffect hook starts working
// if the 2nd argument is an empty array then the useEffect hook only run the code when the page re-renders
// also one more thing to understand is that the updates in the new rect algorithm fiber sends updates to DOM in batches like and in batches the similar updates are ruled out 
// function in the array returned by the useState hook is kinda asynchronous in nature like it doesn't updates the state then and there, but instead schedules the update after all the code has been executed or the existing updates are done, isliye when we update the same variable again and again 
// basically understanding that the useState update ke variables should only be used for, and state variables ke change hone pe useEffect ke andar ka code run hota (useEffect is not for event listening, its for state change)
// state upadate function 2 types of arguments le sakta hai one being the updated state itself and the other being the function which does something with the state, by default agar state variable pass kar diya to fir vo variables pass karte wakt jo variable ki value hogi wahi use hogi to update the state, but if we pass a function to usme variable containing the state ke bajaaye previous state leke pass karega countState me 

// window object and eventListener :- window object has some useful attributes like
// scrollY (amount of pixels travelled from the top of the page to the current window's top)
// window.innerHeight gives the height of the current window open
// window.addEventListener is used to listen to events happening in the window
// addEventListener accepts 2 arguments, one being the event like scroll or resize, and the other being the callback function which runs when the event happens
// we can also use the removeEventListener to remove the event listener, to avoid memory leaks which uses more resources than desired
// usually we remove eventListener when the component is unmounted (removed from the dom)
// in the context of useEffect, we return a function which will be called when the component unmounts, and inside that function is the code which will remove the event listener
// In order to conditional rendering we use ternary operator and some javascript checks whether the state has some value or not, html ko hi variables me store karke kaam karna is also one method
// default propTypes help in debugging
// giving unique keys to objects in react helps in boosting the performance of the website since , it helps react to do the reconciliation easily, it will only compare 2 elements with same key instead of comparing everything 
// we can use conditional rendering to return if no data is present
// propTypes.shape({
//   name: PropTypes.string,
//   age: PropTypes.number,
// }) 
// basically this method is used to define default objects
// to handle onClick events with parameteres we should use an arrow function jiske andar humaare function ka ek parameter ke saath ka value return hoga, by default onClick event trigger hone pe jo event object hoga vo pass ho jaayega onClick event handler function me as a first argument, and we mention anything in the arrow function then vo event object hi consider hoga and then uss event object ke saath we can do something in the function inside the arrow function
// we can do this directly too by just passing e in the definition of the function, and the function will be able to access the event object in it
// but its better to use arrow functions only 
// just like onClick event handler, we have onDoubleClick event handler too

// more CSS hacks :- use transition property , like ask GPT and search ki ease in and ease out property p

// React Bootstrap and other CSS hacks :-
// if we want ki parent element ka background dikhai de, then we gotta use these properties variant=light, bg=transparent, fixed=top, expand=lg in the reactBootstrap component that we're using
// display: grid, place-items: center, place-content: center se website me jo bhi hoga vo ekdum proper center me aa jaayega
// freefrontend website to use the many html css and js snippets to make our frontend work speak up
// remember to use text-shadow property to customize the look of the text 
// you can use line height property to change the space between lines of the container
// text-space property to decide the space between the text of the container
export default App;
