import React, { useState } from "react";

const addCredential = ({ setCredentials, credentials, password, website }) => {
  setCredentials([...credentials, [website, password]]);
};

const AddCredential = ({ setCredentials, credentials, password }) => {
  const [website, setWebsite] = useState("https://");
  const [error, setError] = useState(undefined);
  const websiteChange = (e) => setWebsite(e.target.value);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        margin: "20px 0 0 0",
      }}
    >
      <label
        style={{
          textAlign: "left",
        }}
      >
        Website:
      </label>
      <input
        placeholder="url"
        className="form-control"
        type="text"
        value={website}
        onChange={websiteChange}
      />
      <button
        onClick={() => {
          if (!website || website === "https://") {
            setError("Inserisci un dominio di un sito per continuare.");
          } else if (!password) {
            setError("Genera un password per continuare.");
          } else {
            setError(undefined);
            addCredential({ setCredentials, credentials, password, website });
            setWebsite("https://");
          }
        }}
        className="btn btn-primary"
        style={{
          marginTop: "10px",
        }}
      >
        Aggiungi
      </button>
      <p
        style={{
          color: "red",
          height: 227,
        }}
      >
        {error}
      </p>
    </div>
  );
};
export default AddCredential;
