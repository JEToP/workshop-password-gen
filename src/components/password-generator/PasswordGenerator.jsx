import React, { useState } from "react";
import AddCredential from "../add-credential/AddCredential";

const PasswordGenerator = ({ setCredentials, credentials }) => {
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
        padding: "0 200px 0 200px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        <label style={{ marginRight: "10px" }}>Password:</label>
        <span
          style={{
            height: "30px",
            minWidth: "185px",
          }}
        >
          {password}
        </span>
      </div>
      <button
        onClick={() => setPassword(generatePassword(20))}
        className="btn btn-primary"
      >
        Genera Password
      </button>
      <AddCredential
        setCredentials={setCredentials}
        credentials={credentials}
        password={password}
      />
    </div>
  );
};

function generatePassword(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

export default PasswordGenerator;
