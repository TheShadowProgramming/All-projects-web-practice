import "./index.css" // we'll use it for toggleVisibility + take input from the user about the card, uske baad banao toggle for visibility and also for
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons' // pehle font-awesome ke packages install karo, fir icon import karo and agar kuch typo aaya to blank white screen aayega
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function CardChildren (props) {
    const currentData = new Date();
    const dateArray = String(currentData).split(" ")

    return( 
        <>
        <div className="center-travel-div-content">
            <p className='upper-section-center-travel-div-content'>
              Today Event Live
            </p>
            <div className="lower-section-center-travel-div-content">
              <p>
                {dateArray[1]} {dateArray[2]}, {dateArray[3]}
              </p>
              <div className='faIcons'>
                <FontAwesomeIcon icon={faCalendar} />
              </div>
            </div>
        </div>
        <div className="center-travel-div-content">
            <p className="upper-section-center-travel-div-content" id='call-icon-container'>
              Call <FontAwesomeIcon icon={faPhone} />  
            </p>
            <div className="lower-section-center-travel-div-content">
              <div className='props-children-wala-area'>
               {props.name}
              </div>
              <div className='props-children-wala-area'>

              </div>
            </div>
        </div>
        </>
    )
}

CardChildren.propTypes = { // even though we have PropTypes while importing the function, we must use camelCase while adressing the propTypes of the component that we've defined 
  name: PropTypes.string.isRequired,
  travelDestination: PropTypes.string,
  travelBudget: PropTypes.number,
}

export default CardChildren;