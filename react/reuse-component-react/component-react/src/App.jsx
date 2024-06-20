import "./index.css"
import Card from "./reusable-card.jsx"
import CardChildren from "./card-children.jsx" 

function App() {
  return (
    <>
      <div className='travel-card-menu'>
        <Card> {
           // props.children start here
          }
            <CardChildren name='someRandomName'/> {
              // we're passing name value as key of the props that will be used further
            }
          {
            // props.children end here
          }
        </Card>

        <Card>
            <CardChildren name="someRandomName2"/>
        </Card>

        <Card>
          <CardChildren name="someRandomName3" />
        </Card>
      </div>
    </>
  )
}

// rafce is shortcut to make a react component where we're importing react and then exporting the component too
// it's better to make a components folder in the src folder where we'll write code for every component, and seperate styling for every component
// react bootstrap if the framework to bootstrap your react project, react bootstrap se components utha rahe to 
// className keyword 

export default App
