import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.users));
    // Specify how to clean up after this effect:
    return () => {};
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>GET /api/users</code>:{" "}
          {users.length ? users.join(", ") : "loading..."}
        </p>
        <br />
        
      </header>
    </div>
  );
}

export default App;
