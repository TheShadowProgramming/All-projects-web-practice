import { app } from "../Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Sign In successful");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="flex justify-evenly mt-8">
      <input
        className="p-8 rounded-lg border-2 border-cyan-400"
        value={email}
        type="email"
        placeholder="please enter email bro"
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <input
        className="p-8 rounded-lg border-2 border-cyan-400"
        value={password}
        type="password"
        placeholder="please enter password bro"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-8 rounded-lg border-2 border-cyan-400 bg-orange-500"
        onClick={signInUser}
      >Please signin bro</button>
    </div>
  );
}

export default Signin;
