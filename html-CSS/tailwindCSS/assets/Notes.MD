# Basic Setup

- we need 2 directories in the the project, one being the dist folder and the other being the src folder
- dist is the folder which goes into production, like the tailwind code that we've written builds some CSS files accordingly

- command to tailwindconfig.js files => npx tailwindcss init

- the input.css file in src folder has these 3 lines (@tailwind base; @tailwind components; @tailwind utilities;)

- use tailwindIntelliSense for suggestions inline

- changes in tailwindconfig.js file :- So, together, ./dist/\*_/_.{html,js} means "look inside the dist directory and all of its subdirectories for any files with the .html or .js extensions."

- npx tailwindcss -i "path of input.css file in which all three lines are present" -o "path of the directory/name of the output css file in which all the tailwind builds" (qoutes are not expected in the command)

- npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch (the main command)

# Some Basic Classes and some CSS concepts

- rem is a unit to give font size (1rem = 16px) [derived from the root html element of the document and when the user changes the font size from the root element tab the website reacts]
- m-4(1rem, 16px), p-6(1.5rem, 24 px)
- mx-auto se horizontal centring, my-auto se vertical centring
- ![calc function](image.png) for applying very detailed CSS like 80% viewport height se 5 px kam ho ya 10 px kam ho
- box-sizing: border-box; // ye chije mandatorily karlo in the root selector and then move on to the other code sections
  margin: 0;
  padding: 0;
- my laptop has 1360 x 656 pixels in width and height respectively, so we'll design websites accordingly
- flex col. makes the flex happen in vertical direction
- rest search in tailwind docs

# Custom values

- we can use arbitary values in tailwindCSS properties using hyphen and [] brackets (but it works for only pixel values first)
- Also if we want to viewport units to something then using custom utility classes make sense

module.exports = {
theme: {
extend: {
width: {
'clamp-200-50vw-800': 'clamp(200px, 50vw, 800px)',
},
},
},
plugins: [],
};

- this is how we can write custom tailwind values and classess

# Advanced CSS concepts

### grid

![grid-tutorial](image-2.png)

### Responsive design (mobile first approach)

- write the CSS for mobile first then use sm:/md:/lg: type psuedo classes for writing the design for larger screens
- image ke size ko manipulate karne ke liye insert the link instead of downloading (if possible)
- clamp(minimum-value preffered-value maximum-value) => we can give this value to any property of CSS to make our components responsive
- video/image ke liye aspect ratio : 16/9 karne se kaam hojaata to maintain the aspect in responsive websites

### psuedo classes

- focus-within psuedo-class to make the list still holding the custom CSS even after clicking something inside the list sub-items
- focus class is used to style elements jab unpe focus aaye tab karke ya fir click karke
- active class is used to style elements jab unpe click ka moment ho raha hota hai yaani when the person is holding the stuff jispe active class laga rahe hai
- dark: psuedo class helps you to write seperate styling for dark mode if we want to change something then
