import React from 'react';
import { getDatabase, set, ref } from 'firebase/database';
import { app } from './Firebase';

const db = getDatabase(app)

function DataStoringButton() {
    const putDataFunction = () => {
        set(ref(db, "users/monish"), {
            name: "Monish",
            age: "21",
            occupation: "programmer",
        })
    }

  return (
    <div className='h-36'>
      <button className='text-white p-8 border-2 border-cyan-600 rounded-lg' onClick={putDataFunction}>
        Put Data
      </button>
    </div>
  )
}

export default DataStoringButton;
