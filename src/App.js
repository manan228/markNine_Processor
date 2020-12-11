import React, { useState } from "react";
import "./styles.css";

var processor = {
  intel: [
    { name: "i3", clockSpeed: "3.4GHz – 4.2GHz" },
    { name: "i5", clockSpeed: "2.4GHz – 3.8GHz" },
    { name: "i7", clockSpeed: "2.9GHz – 4.2GHz" }
  ],

  AMD: [
    { name: "Ryzen_7_5800X", clockSpeed: "3.8 - 4.7 GHz" },
    { name: "Ryzen_5_5600X", clockSpeed: "3.7 - 4.6 GHz" },
    { name: "Ryzen_5_3600XT", clockSpeed: "3.8 - 4.4 GHz" }
  ],

  apple: [{ name: "M1", clockSpeed: "3.2 - 4.2 Ghz" }]
};

var processorName = Object.keys(processor);

export default function App() {
  var [selectedProcessor, newSelectedProcessor] = useState("intel");

  function onClickProcessorName(pName) {
    newSelectedProcessor(pName);
  }

  return (
    <div className="App">
      <h1>Processor</h1>
      <div>Checkout, clcokspeed of various processor</div>

      {processorName.map(function (pName) {
        return (
          <button
            key={pName}
            onClick={() => onClickProcessorName(pName)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              margin: "1rem 0.5rem",
              background: "darkgrey"
            }}
          >
            {pName}
          </button>
        );
      })}

      <hr />
      <div style={{ margin: "auto" }}>
        <ul style={{ width: "50%", margin: "auto" }}>
          {processor[selectedProcessor].map((inf) => (
            <li
              key={inf.name}
              style={{
                listStyle: "none",
                margin: "1rem auto",
                padding: "1rem 1.5rem",
                border: "1px solid #000000",
                borderRadius: "1rem",
                width: "50%"
              }}
            >
              <div>Processor: {inf.name}</div>
              <div style={{ marginTop: "0.5rem" }}>
                Clock Speed: {inf.clockSpeed}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
