### useCallback vs useEffect
 - when we do async calls like data fetching setTimeouts then we gotta cleanup those async calls therefore whenever certain state changes due to these async calls then we use useEffect hook to do cleanup after the function that we pass in useEffect along with the array of dependencies

 - keep in mind that the side Effect functions inside the useEffect functions run only after the initial render if the dependency array is empty

 - and when we just want to update variables then maybe it would be better to just call useCallback functions which would just update the variables with no cleanup functions required

 - another use of useCallback is memoization, react optimizes the speed of our application by caching the function instances, like whenever we reload the website then react doesn't create another function instance to calculate the output for given state variables in the dependencies array and instead what it does is basically return the output according to the current state variable which is still constant

 - we use useCallback for optimization purposes since re-creating instances of big functions on every re-render of the website makes our website slow, now this useCallback hook may become obsolete in future but yea let's see

 - and like function's instance is recreated only when the state variable changes


 ### useRef use 

 - very important hook which helps in declaring variables which you can use in computations of the component, but don't want the code to re-render once the variable changes
 
 - basically kind of aisa important variable jo internally use ho, aur ui pe naa dikhana ho state variable ki tarah, kyuki we can't display these ref variables on the display since they won't trigger re-renders even when the value changes

 - another use of useRef hook is reference a JSX code for manipulating its attributes in future under certain custom condition of your choice, just like we do document.querySelector type shit 

 ### working of the useState hook and infinite re-renders

 => Infinite re-renders

import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // A function that updates the state
  const updateCount = () => {
    setCount(count + 1);
  };

  // Suppose this function is called just before the return statement
  updateCount();

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;

- in this code example, the render is happening in an infinite loop, since the code execution is something like that the
- the initial functional component renders first by running the code from top to bottom thus by firing the useState hook which basically sets the state to some initial variable
- and whenever the state changes, react schedules an update for functional component and re-runs the code of the functional component with the updated state value whenever the current render que is empty, 
- Therefore this code will create an infinite re-rendering scenario since the react won't stop re-rendering since every re-render is creating another re-render instance

=> working of updates of react fiber algorithm 

- useState variable by default gives a state variable which only maintains the state value across re-renders done by react when the state variables change, and doesn't maintains the state variable across reloads
- updates in the UI are batched together in order to serve to the general user since many users may update the UI all at once 
- and here in this case, multiple state updates are happening all at once, therefore it is crucial for react to batch these updates for performance reasons
- so whenever state updates are multiple in nature, react just does the updates like it does all the updates and then renders the final update with the state only 


setState(count + 1)
setState(count + 1)

- aisa do baar karne se hoga kya ki 2 baar asynchronously state updates schedule honge and iske neeche ka code execute hona chaalu ho jaayega
- and react will batch these 2 updates together since the updates are targetting the exact same count variable and will only update the count variable once and the value of the count variable would be 1 only
- jab tak thread neeche pohucha tha on the second setState tab tak to count update hua hi nahi tha 

- when we use setState(prevcount => prevcount + 1), then setState function accepts this function which just increases the value of argument by 1,
- and the inner working of the setState function is like this only that when we pass a function to it then it passes the previous state value by default to the function passed to it 


### event object ke faayde 

1. Basic Properties of e:

    e.type: Yeh batata hai kis type ka event trigger hua. Jaise click, change, keydown, etc.
    e.target: Yeh reference deta hai us element ka jisme event trigger hua.
        e.target.value: Jaise tu pehle use kar raha hai, yeh input field ki current value nikaalta hai.
        e.target.name: Input element ka name attribute agar diya ho, toh uski value milti hai.
        e.target.id: Input element ka id attribute agar diya ho, toh uski value milti hai.
        e.target.checked: Agar element checkbox ya radio button hai, toh isse pata chalega ki checkbox checked hai ya nahi.

2. Mouse Events (e.g., click, mousemove, etc.):

    e.clientX / e.clientY: User ke mouse pointer ka position batata hai with respect to the viewport (browser window).
    e.pageX / e.pageY: Mouse pointer ka position batata hai with respect to the whole page, including any scrolled content.
    e.screenX / e.screenY: Mouse pointer ka position batata hai with respect to the user's screen.
    e.altKey, e.ctrlKey, e.shiftKey, e.metaKey: Yeh boolean values hoti hain jo batati hain agar Alt, Ctrl, Shift, ya Meta (Command on Mac) keys press ki gayi hain ya nahi.

3. Keyboard Events (e.g., keydown, keyup, keypress):

    e.key: Jo key press ki gayi, uska naam batata hai (like "Enter", "Escape", etc.).
    e.code: Physical key code batata hai jo pressed hua tha. Yeh usually fixed hota hai, chahe keyboard layout change ho jaye.
    e.which: ASCII value ya code of the key pressed (deprecated, lekin kuch purani browsers mein support hota hai).
    e.keyCode: Key code of the key pressed (also deprecated).

4. Form Events (e.g., submit, change, input):

    e.preventDefault(): Form submission ya default behavior ko stop karne ke liye use hota hai.
    e.stopPropagation(): Event bubbling ko roknay ke liye use hota hai, taaki event parent elements tak na pahunche.
    e.target.form: Jis form mein input element hai, uska reference deta hai.

5. Drag Events (e.g., dragstart, dragend, drop):

    e.dataTransfer: Dragged data ko handle karne ke liye use hota hai. dataTransfer object ke through drag and drop data manage hota hai.

6. Touch Events (e.g., touchstart, touchmove, touchend):

    e.touches: Current touches ki list deta hai. Yeh array-like object hota hai jo active touches ko hold karta hai.
    e.changedTouches: Yeh un touches ki list deta hai jo event ke saath change hui hain.
    e.targetTouches: Yeh touches ki list deta hai jo specific target element ke saath related hain.

7. Window & Document Events:

    window.innerWidth / window.innerHeight: Window ki current width aur height batata hai (viewport size).
    window.scrollX / window.scrollY: Page ke horizontal aur vertical scroll position batata hai.
    document.title: Current document ka title batata hai, jo tab mein display hota hai.
    window.location: Current URL aur location-related information provide karta hai.
        window.location.href: Full URL string deta hai.
        window.location.pathname: Path of the current page deta hai.
        window.location.search: Query string (?key=value) deta hai.
        window.location.hash: Fragment identifier (#section) deta hai.

8. Clipboard Events:

    e.clipboardData: Clipboard pe copy ya paste hone wale data ko handle karne ke liye use hota hai.
    e.clipboardData.getData('text'): Clipboard se text data nikaalne ke liye.
    e.clipboardData.setData('text', 'value'): Clipboard mein text data daalne ke liye.

9. Custom Events:

    e.detail: Agar custom event create kiya gaya ho, toh detail property mein custom data hota hai jo event ke saath pass kiya gaya ho.

10. Focus Events:

    e.relatedTarget: Focus event ke case mein, yeh property batati hai ki focus kaha se aa raha hai ya kaha jaa raha hai (next focusable element).

Advanced Usage:

    e.isTrusted: Yeh boolean value hoti hai jo batati hai ki event user ke action se trigger hua ya programmatically trigger kiya gaya.
    e.timeStamp: Event trigger hone ka exact time in milliseconds since the document was created.

Combining with window & document:

    window.navigator.userAgent: User ke browser aur OS ke baare mein info nikalne ke liye.
    window.history: Browser ke history stack ko access karne ke liye.
    window.localStorage / sessionStorage: User ke browser mein data store karne ya nikalne ke liye.
    document.referrer: Previous page ka URL nikalne ke liye, jo user ne visit kiya tha.
    window.matchMedia('(min-width: 600px)').matches: Media queries ke through current viewport width check karne ke liye.

TL;DR: Event object ke through tu bahut sari cheezein nikaal sakta hai, jaise mouse position, key press info, form data, drag-and-drop actions, clipboard data, aur user ke browser ya system ke baare mein detailed info. Event object aur window/document ke saath khelke tu user ke interaction aur system ke baare mein poori jankari le sakta hai.

### html properties

- input tag has many types like text, checkbox, range, checkbox and range has onChange event handlers and range has min and max values too which can dictate ki how much the slider should take the value