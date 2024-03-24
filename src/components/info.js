import React from "react";
import "../App.css";
import styled from "styled-components";
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  outline: 0;
  border: 0;
  cursor: pointer;
  transition: ease background-color 250ms;
  font-size: calc(5px + 14 * (100vw / 1280));
  width: max-content;
  &:hover {
    background-color: blue;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;
const startAlert = () => {
  alert("hi");
};
const Info = (props) => {
  const { onClick } = props;
  return (
    <div className="container">
      <h1>Алейников Ярослав Павлович</h1>
      <h1>Начинающий WEB разработчик</h1>
      <div className="containerbutton">
        <h1>+7 961 890 04 21</h1>
        <div className="container">
          <form action="https://vk.com/mrokobysina">
            <Button>VK</Button>
          </form>
          <Button type="button" onClick={onClick}>
            TG
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
