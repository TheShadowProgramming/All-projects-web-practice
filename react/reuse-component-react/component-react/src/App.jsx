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

export default App;
