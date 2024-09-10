import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
import { useState } from "react";

const auth = getAuth(app);

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div className="flex justify-evenly mt-8">
      <input
        className="p-4 border-2 border-cyan-400 text-slate-950 rounded-lg"
        value={email}
        type="email"
        name=""
        id="signup-email"
        placeholder="please enter email bro"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="p-4 border-2 border-cyan-400 text-slate-950 rounded-lg"
        value={password}
        type="password"
        name=""
        id="signup-password"
        placeholder="please enter password bro"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        className="p-4 border-2 border-cyan-400 bg-orange-500 text-white rounded-lg"
        onClick={signUpUser}
      >
        Please Signup bro
      </button>
    </div>
  );
}

export default Signup;
