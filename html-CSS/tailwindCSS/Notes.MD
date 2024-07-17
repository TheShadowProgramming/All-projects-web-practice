# Basic Setup

- we need 2 directories in the the project, one being the dist folder and the other being the src folder
- dist is the folder which goes into production, like the tailwind code that we've written builds some CSS files accordingly

- command to tailwindconfig.js files => npx tailwindcss init

- the input.css file in src folder has these 3 lines (@tailwind base; @tailwind components; @tailwind utilities;)

- changes in tailwindconfig.js file :- So, together, ./dist/\*_/_.{html,js} means "look inside the dist directory and all of its subdirectories for any files with the .html or .js extensions."

- npx tailwindcss -i "path of input.css file in which all three lines are present" -o "path of the directory/name of the output css file in which all the tailwind builds" (qoutes are not expected in the command)

- npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch (the main command)

# Some Basic Classes (jo nahi pata usko tailwind docs me search karlo)

- bg-colorName-intensityLevel
- text-colorName
- flex(directly) justify-(center/around/between)
- rem is a unit to give font size (1rem = 16px)
- m-4(1rem, 16px), p-6(1.5rem, 24 px)
- h-screen on the body (makes the body take the height of the entire screen and then the content inside the body comes to both vertically and horizontally centre)
- text-4xl (text size)
- max-w-sm (max width ,sm is 24rems = 384px)
- mx
