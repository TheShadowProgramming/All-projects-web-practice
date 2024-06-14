import PropTypes from 'prop-types'; // necessary for using props.children
import { useState } from 'react'; // state updates are passed down from Parent to Child component in react, like the value of the state variable will be updated only in the children of the parent component or basically where we've passed down the state as props 

// we can even define multiple components in single module but in order to export these components we gotta use {} and then seperate component names with comma
// same tarike se we can import multiple components

function Card (props) {
   let [isVisible, visibilityChanger] = useState(false)

   function changeVisibility() {
      visibilityChanger(!isVisible)
      return;
  }

    if (isVisible) {
        return(
            <>
                <button onClick={changeVisibility} className='lower-travel-button'>
                    {isVisible ? 'Show' : 'Hide'} Card
                </button>
            </>
        )
    } else {
        return (
            <div className="travel-card">
                <div className="upper-travel-div">
                    <p className='upper-travel-div-content'>
                        Card Background
                    </p>
                    <p className="upper-travel-div-content">
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="center-travel-div">
                    {props.children}
                </div>
                <button onClick={changeVisibility} className='lower-travel-button'>
                    {isVisible ? 'Show' : 'Hide'} Card
                </button>
            </div>
        )
    }
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
}; // defines a schema for the types of data that we can pass inside the value of the keys defined

export default Card;