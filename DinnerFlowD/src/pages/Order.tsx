import React from "react";
import "./Order.css";
import { Link } from "react-router-dom";

const m1 = {
  firstname: "Jan",
  lastname: "Kowalski",
  class: "3TP",
  id: 1,
  price: "160zł",
  quantity1: 10,
  quantity2: 6,
};
const m2 = {
  firstname: "Michał",
  lastname: "Wójcik",
  class: "2TP",
  id: 2,
  price: "90zł",
  quantity1: 3,
  quantity2: 6,
};
const m3 = {
  firstname: "Klara",
  lastname: "Woźniak",
  class: "3E",
  id: 3,
  price: "230zł",
  quantity1: 13,
  quantity2: 10,
};
const m4 = {
  firstname: "Karol",
  lastname: "Kozłowski",
  class: "2D",
  id: 4,
  price: "160zł",
  quantity1: 14,
  quantity2: 2,
};
const m5 = {
  firstname: "Laura",
  lastname: "Szymańska",
  class: "3E",
  id: 5,
  price: "100zł",
  quantity1: 2,
  quantity2: 8,
};

const Id = (props: any) => <Link to="/historyinfo">{props.id}</Link>;

const PersonInfo = (props: any) => (
  <>
    <tr className="board">
      <td>
        <Id id={props.id} />
      </td>
      <td>
        {props.firstname} {props.lastname}
      </td>

      <td>{props.class}</td>
      <td>{props.quantity1}</td>
      <td>{props.quantity2}</td>
      <td>{props.price}</td>
      <td>
        <button id="pay">Zrealizuj</button>
      </td>
      <td>
        <Link to="/orderdetails">
          <button id="details">...</button>
        </Link>
      </td>
    </tr>
  </>
);

export const Order = () => {
  return (
    <>
      <h1>Lista zamówień</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Imie i nazwisko</th>
          <th>Klasa</th>
          <th>I</th>
          <th>II</th>
          <th>Cena</th>
        </tr>

        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
          quantity1={m1.quantity1}
          quantity2={m1.quantity2}
          price={m1.price}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
          quantity1={m2.quantity1}
          quantity2={m2.quantity2}
          price={m2.price}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
          quantity1={m3.quantity1}
          quantity2={m3.quantity2}
          price={m3.price}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
          quantity1={m4.quantity1}
          quantity2={m4.quantity2}
          price={m4.price}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
          quantity1={m5.quantity1}
          quantity2={m5.quantity2}
          price={m5.price}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
          quantity1={m1.quantity1}
          quantity2={m1.quantity2}
          price={m1.price}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
          quantity1={m2.quantity1}
          quantity2={m2.quantity2}
          price={m2.price}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
          quantity1={m3.quantity1}
          quantity2={m3.quantity2}
          price={m3.price}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
          quantity1={m4.quantity1}
          quantity2={m4.quantity2}
          price={m4.price}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
          quantity1={m5.quantity1}
          quantity2={m5.quantity2}
          price={m5.price}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
          quantity1={m1.quantity1}
          quantity2={m1.quantity2}
          price={m1.price}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
          quantity1={m2.quantity1}
          quantity2={m2.quantity2}
          price={m2.price}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
          quantity1={m3.quantity1}
          quantity2={m3.quantity2}
          price={m3.price}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
          quantity1={m4.quantity1}
          quantity2={m4.quantity2}
          price={m4.price}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
          quantity1={m5.quantity1}
          quantity2={m5.quantity2}
          price={m5.price}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
          quantity1={m1.quantity1}
          quantity2={m1.quantity2}
          price={m1.price}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
          quantity1={m2.quantity1}
          quantity2={m2.quantity2}
          price={m2.price}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
          quantity1={m3.quantity1}
          quantity2={m3.quantity2}
          price={m3.price}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
          quantity1={m4.quantity1}
          quantity2={m4.quantity2}
          price={m4.price}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
          quantity1={m5.quantity1}
          quantity2={m5.quantity2}
          price={m5.price}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
          quantity1={m1.quantity1}
          quantity2={m1.quantity2}
          price={m1.price}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
          quantity1={m2.quantity1}
          quantity2={m2.quantity2}
          price={m2.price}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
          quantity1={m3.quantity1}
          quantity2={m3.quantity2}
          price={m3.price}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
          quantity1={m4.quantity1}
          quantity2={m4.quantity2}
          price={m4.price}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
          quantity1={m5.quantity1}
          quantity2={m5.quantity2}
          price={m5.price}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
          quantity1={m1.quantity1}
          quantity2={m1.quantity2}
          price={m1.price}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
          quantity1={m2.quantity1}
          quantity2={m2.quantity2}
          price={m2.price}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
          quantity1={m3.quantity1}
          quantity2={m3.quantity2}
          price={m3.price}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
          quantity1={m4.quantity1}
          quantity2={m4.quantity2}
          price={m4.price}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
          quantity1={m5.quantity1}
          quantity2={m5.quantity2}
          price={m5.price}
        />
        <PersonInfo
          firstname={m1.firstname}
          lastname={m1.lastname}
          id={m1.id}
          class={m1.class}
          quantity1={m1.quantity1}
          quantity2={m1.quantity2}
          price={m1.price}
        />
        <PersonInfo
          firstname={m2.firstname}
          lastname={m2.lastname}
          id={m2.id}
          class={m2.class}
          quantity1={m2.quantity1}
          quantity2={m2.quantity2}
          price={m2.price}
        />
        <PersonInfo
          firstname={m3.firstname}
          lastname={m3.lastname}
          id={m3.id}
          class={m3.class}
          quantity1={m3.quantity1}
          quantity2={m3.quantity2}
          price={m3.price}
        />
        <PersonInfo
          firstname={m4.firstname}
          lastname={m4.lastname}
          id={m4.id}
          class={m4.class}
          quantity1={m4.quantity1}
          quantity2={m4.quantity2}
          price={m4.price}
        />
        <PersonInfo
          firstname={m5.firstname}
          lastname={m5.lastname}
          id={m5.id}
          class={m5.class}
          quantity1={m5.quantity1}
          quantity2={m5.quantity2}
          price={m5.price}
        />
      </table>
    </>
  );
};
