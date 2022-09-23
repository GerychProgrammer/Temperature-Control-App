import React from "react";
import { useState } from "react";

function App() {
  const [temperatureValue, setTemperaturaValue] = useState(10);
  const [temperatureColor, setTemperaturaColor] = useState("cold");

  function increaseTemperaturaValue() {
    const temperature = temperatureValue + 1;

    if (temperature >= 15) {
      setTemperaturaColor("hot");
    }

    setTemperaturaValue(temperature);
  }

  function decreaseTemperaturaValue() {
    if (temperatureValue === 0) {
      return;
    }

    const temperature = temperatureValue - 1;

    if (temperature < 15) {
      setTemperaturaColor("cold");
    }

    setTemperaturaValue(temperature);
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          <p>{temperatureValue}°C</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperaturaValue()}>+</button>
        <button onClick={() => decreaseTemperaturaValue()}>-</button>
      </div>
    </div>
  );
}

export default App;
