import React, { useState } from "react";
import "./App.css";
import PasswordGenerator from "./components/password-generator/PasswordGenerator";
import CredentialsVisualization from "./components/credentials-visualization/CredentialsVisualization";

function App() {
  const [credentials, setCredentials] = useState([[]]);
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
      }}
    >
      <PasswordGenerator
        setCredentials={setCredentials}
        credentials={credentials}
      />
      <CredentialsVisualization credentials={credentials} />
    </div>
  );
}

export default App;
