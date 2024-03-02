import React, { useState } from "react";
import "./CuentaRegresiva.css";

export default function CuentaRegresiva() {
  const [segundos, setSegundos] = useState("00");
  const [minutos, setMinutos] = useState("00");
  const [horas, setHoras] = useState("00");
  const [dias, setDias] = useState("00");
  const [final, setfinal] = useState("");

  const getRemainingTime = (deadline) => {
    let now = new Date(),
      remainTime = (new Date(deadline) - now + 1000) / 1000,
      remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
      remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
      remainDays = Math.floor(remainTime / (3600 * 24));

    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime,
    };
  };

  const countdown = (deadline, finalMessage) => {
    const timerUpdate = setInterval(() => {
      let t = getRemainingTime(deadline);
      setDias(`${t.remainDays}`);
      setHoras(`${t.remainHours}`);
      setMinutos(`${t.remainMinutes}`);
      setSegundos(`${t.remainSeconds}`);

      if (t.remainTime <= 1) {
        clearInterval(timerUpdate);
        setfinal(finalMessage);
      }
    }, 1000);
  };

  countdown("March 31 2024 23:59:00 GMT-0300", "¡Felicidades Grovat!");

  return (
    <div className="contenedor">
      <div className="contador">
        <div className="con">
          <div className="card numero">{dias}</div>
          <p className="card-body regresiva" id="dias">
            DIAS
          </p>
        </div>
        <div className="con">
          <div className="card numero">{horas}</div>
          <p className="card-body regresiva" id="horas">
            HORAS
          </p>
        </div>
        <div className="con">
          <div className="card numero">{minutos}</div>
          <p className="card-body regresiva" id="minutos">
            MINUTOS
          </p>
        </div>
        <div className="con">
          <div className="card numero">{segundos}</div>
          <p className="card-body regresiva" id="segundos">
            SEGUNDOS
          </p>
        </div>
        {final}
      </div>
    </div>
  );
}
