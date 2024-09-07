import { useState } from "react";
import { app } from "../Firebase";
import { getDatabase, set, ref } from "firebase/database";

const db = getDatabase(app);

function DatabasePutButton() {
  const [row, setRow] = useState("");
  const [column, setColumn] = useState("");
  
  const putData = () => {
    set(ref(db, `${row}/${column}`), {
        name: "Monish",
        age: 21,
        occupation: "Programmer",
    })
  }

  return (
    <div className="flex justify-evenly mt-8    ">
      <input className="p-8 border-2 border-cyan-400 rounded-lg"
        type="text"
        placeholder="enter the Row in which you want to put the data"
        onChange={(e) => setRow(e.target.value)}
      />
      <input className="p-8 border-2 border-cyan-400 rounded-lg"
        type="text"
        placeholder="enter the Column in which you want to put the data"
        onChange={(e) => setColumn(e.target.value)}
      />
      <button className="p-8 border-2 border-cyan-400 bg-orange-500 rounded-lg" onClick={putData}>Put Data</button>
    </div>
  );
}

export default DatabasePutButton;
