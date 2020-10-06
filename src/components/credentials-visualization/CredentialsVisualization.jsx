import React, { useState } from "react";

// App
//  PasswordGenerator
//    AddCredential
//  CredentialVisualization

const CredentialsVisualization = ({ credentials }) => {
  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sito</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {credentials.map((credentials) => (
            <tr>
              {credentials.map((column) => (
                <td>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CredentialsVisualization;
