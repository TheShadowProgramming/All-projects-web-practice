import "./index.css"
import Card from "./reusable-card.jsx"
import CardChildren from "./card-children.jsx"
import { useState } from 'react'; // state updates are passed down from Parent to Child component in react, like the value of the state variable will be updated only in the children of the parent component or basically where we've passed down the state as props 

function App() {
  let [isVisible, visibilityChanger] = useState(false)

   function changeVisibility() {
      visibilityChanger(!isVisible)
      return;
  }
  return (
    <>
      <div className='travel-card-menu'>
        <Card state={isVisible} stateChanger={changeVisibility}> {
           // props.children start here
          }
            <CardChildren name='someRandomName'/> {
              // we're passing name value as key of the props that will be used further
            }
          {
            // props.children end here
          }
        </Card>

        <Card state={isVisible} stateChanger={changeVisibility}>
            <CardChildren name="someRandomName2"/>
        </Card>

        <Card state={isVisible} stateChanger={changeVisibility}>
          <CardChildren name="someRandomName3" />
        </Card>
      </div>
    </>
  )
}

export default App
