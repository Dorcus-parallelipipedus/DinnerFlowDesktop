import React from "react";
import "./EditUser.css";
import { Link } from "react-router-dom";

const m1 = {
  firstname: "Jan",
  lastname: "Kowalski",
  class: "3TP",
  id: 1,
};
const m2 = {
  firstname: "Michał",
  lastname: "Wójcik",
  class: "2TP",
  id: 2,
};
const m3 = {
  firstname: "Klara",
  lastname: "Woźniak",
  class: "3E",
  id: 3,
};
const m4 = {
  firstname: "Karol",
  lastname: "Kozłowski",
  class: "2D",
  id: 4,
};
const m5 = {
  firstname: "Laura",
  lastname: "Szymańska",
  class: "3E",
  id: 5,
};

export const EditUser = () => {
  return (
    <>
      <div id="deleteGuy">
        <h1>Edycja użytkownika</h1>
        <input type="text" placeholder="Jan" />
        <br />
        <input type="text" placeholder="Kowalski" />
        <br />
        <input type="text" placeholder="jankowalski19@gmail.com" />
        <br />
        <br />
        <input className="clas" type="text" placeholder="2TP" />
        <br />
        <input className="clas" type="text" value="ID - 1" />

        <Link to="/list">
          <button id="back">Wróć</button>
        </Link>

        <Link to="/list">
          <button id="save">Zapisz</button>
        </Link>
      </div>
    </>
  );
};
