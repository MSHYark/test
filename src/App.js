
import "./App.css";
import React, { useState } from "react";
import Info from "./components/info";
import Weather from "./components/Weather";
import Form from "./components/form";
import Modal from "./components/modal";

const API_KEY = "f12c7c5e5f5d1df46855436cf309267f";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_url = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    console.log(data);
  };

  const handleModalOpen = () => {
    setModalActive(true);
  };

  return (
    <div className="back">
      <button onClick={() => setModalActive(true)}></button>
      {modalActive && <Modal handleModalClose={() => setModalActive(false)} />} 
      <Info onClick={handleModalOpen} />
      
      <Form message={gettingWeather} />
      <Weather />
    </div>
  );
}

export default App;
