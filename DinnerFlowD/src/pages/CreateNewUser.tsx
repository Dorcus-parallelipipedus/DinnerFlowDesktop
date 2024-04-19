import React from "react";
import { Link } from "react-router-dom";

export const CreateNewUser = () => {
  return (
    <>
      <div id="deleteGuy">
        <h1>Edycja użytkownika</h1>
        <input type="text" placeholder="Imie" />
        <br />
        <input type="text" placeholder="Nazwisko" />
        <br />
        <input type="text" placeholder="user@moreapp.com" />
        <br />
        <br />
        <input className="clas" type="text" placeholder="Klasa" />
        <br />
        <input className="clas" type="text" value="ID - 29" />

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
