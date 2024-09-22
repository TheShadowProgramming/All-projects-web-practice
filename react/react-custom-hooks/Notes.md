# Notes

- custom hook creation, and we end the names of these hook functions with js instead of jsx since it is clear that they usually run js only so need of html
- we create a seperate custom hooks folder where we save the hooks that we created

# .env variables 

- .env variables are variables which usually store global keys and permission variables which are usually used by the applications 
- we store these variables in a seperate file since we don't want to expose them while pushing them to open source repos
- and we include that .env file in the gitignore and share these permission keys usually with mail of encrypted messages so that it is not exposed 
- these env variables are pushed through github secrets or github actions and stuff in production for vercel deploying

# custom hook context

- we created the custom hook jo ek baar run hoga when the component mounts, and jab dependency variable ya fir component unmount hota hai tab ek cleanup function rahe 
- uske liye we created custom hook which uses useEffect and useState under the hood
- useEffect me fetch hoga and promise return hoga and usko we chain in the useEffect function itself

