import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 const register = async () => {
  try {
    const res = await axios.post("https://mern-testing.onrender.com/register", {
      username,
      password,
    });
    alert(res.data.message);
  } catch (err) {
    alert("Registration failed");
  }
};


  const login = async () => {
  try {
    const res = await axios.post("https://mern-testing.onrender.com/login", {
      username,
      password,
    });
    alert(res.data.message);
  } catch (err) {
    alert(err.response?.data?.error || "Login failed");
  }
};


  return (
    <div style={{ padding: "50px" }}>
      <h2>Register / Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} /><br/><br/>
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} /><br/><br/>
      <button onClick={register}>Register</button>
      <button onClick={login} style={{ marginLeft: "10px" }}>Login</button>
    </div>
  );
}

export default App;
