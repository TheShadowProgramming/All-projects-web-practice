import { useState } from 'react'
import './App.css'

function App() {

  function randomPasswordGenerator () {

  }

  const [password, setPassword] = useState('')
  return (
    <>
      <div className='w-screen h-screen pt-16 bg-slate-950 relative'> 
        <div className='bg-slate-800 w-[55vw] h-auto mx-auto py-8 flex flex-wrap justify-center rounded-2xl'>
          <div className='w-[90%] h-auto flex flex-wrap gap-0 justify-center'>
            <div className='bg-white w-[85%] text-orange-500 text-left px-4 py-4 rounded-l-2xl'>
              test
            </div>
            <div className='bg-sky-600 w-[15%] px-4 py-4 rounded-r-2xl text-white text-center'>
              copy
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
