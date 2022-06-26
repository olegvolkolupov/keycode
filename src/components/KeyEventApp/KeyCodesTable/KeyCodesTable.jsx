import React from "react";

import keyCodes from "./KeyCodes.js";
import KeyCodesTableList from "./KeyCodesTableList";

import "./keyCodesTable.css";

export default function KeyCodesTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Key Code</th>
          <th>Key</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {keyCodes.map(({ keyCode, description }) => (
          <KeyCodesTableList
            key={keyCode}
            keyCode={keyCode}
            description={description}
          />
        ))}
      </tbody>
    </table>
  );
}
