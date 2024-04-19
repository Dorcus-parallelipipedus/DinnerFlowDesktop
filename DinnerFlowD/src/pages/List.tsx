import React from "react";
import "./List.css";
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

const Id = (props: any) => <Link to="/historyinfo">{props.id}</Link>;

const PersonInfo = (props: any) => (
  <>
    <tr className="board">
      <td>
        {props.firstname} {props.lastname}
      </td>
      <td>
        <Id id={props.id} />
      </td>
      <td>{props.class}</td>
      <td>
        <Link to="/edituser" id="edit">
          Edytuj
        </Link>
      </td>
      <td>
        <Link to="/list" id="delete">
          Usuń
        </Link>
      </td>
    </tr>
  </>
);

export const List = () => {
  return (
    <>
      <Link to="/createnewuser">
        <button id="plus">+</button>
      </Link>
      <h1>Lista uczniów</h1>
      <table>
        <tr>
          <th>Imie i nazwisko</th>
          <th>Id</th>
          <th>Klasa</th>
        </tr>
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
        />
      </table>
    </>
  );
};
