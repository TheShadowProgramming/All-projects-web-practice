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

export default App
