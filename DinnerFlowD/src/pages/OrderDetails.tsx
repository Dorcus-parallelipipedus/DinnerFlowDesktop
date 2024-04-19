import React from "react";
import { Link } from "react-router-dom";
import "./OrderDetails.css";

const m1 = {
  firstname: "Jan",
  lastname: "Kowalski",
  class: "3TP",
  id: 1,
  price: "160zł",
  quantity1: 10,
  quantity2: 6,
};

export const OrderDetails = () => {
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Imie i nazwisko</th>
          <th>Klasa</th>
          <th>Cena</th>
        </tr>
        <tr id="board">
          <td>
            <strong>{m1.id}</strong>
          </td>
          <td>
            {m1.firstname} {m1.lastname}
          </td>

          <td>{m1.class}</td>

          <td>{m1.price}</td>
        </tr>
      </table>

      <table id="orderlist">
        <tr>
          <th>Data</th>
          <th>Jakie danie?</th>
        </tr>
        <tr>
          <td>
            <strong>19.04.2024</strong>
            <br />
            11:25
          </td>
          <td>Pierwsze</td>
        </tr>
        <tr>
          <td>
            <strong>19.04.2024</strong>
            <br />
            12:33
          </td>
          <td>Drugie</td>
        </tr>
        <tr>
          <td>
            <strong>18.04.2024</strong>
            <br />
            11:24
          </td>
          <td>Pierwsze</td>
        </tr>
        <tr>
          <td>
            <strong>18.04.2024</strong>
            <br />
            11:27
          </td>
          <td>Drugie</td>
        </tr>
        <tr>
          <td>
            <strong>17.04.2024</strong>
            <br />
            11:23
          </td>
          <td>Drugie</td>
        </tr>
        <tr>
          <td>
            <strong>16.04.2024</strong>
            <br />
            11:25
          </td>
          <td>Pierwsze</td>
        </tr>
        <tr>
          <td>
            <strong>15.04.2024</strong>
            <br />
            12:33
          </td>
          <td>Drugie</td>
        </tr>
        <tr>
          <td>
            <strong>14.04.2024</strong>
            <br />
            11:24
          </td>
          <td>Pierwsze</td>
        </tr>
        <tr>
          <td>
            <strong>14.04.2024</strong>
            <br />
            11:27
          </td>
          <td>Drugie</td>
        </tr>
        <tr>
          <td>
            <strong>13.04.2024</strong>
            <br />
            11:23
          </td>
          <td>Drugie</td>
        </tr>
        <tr>
          <td>
            <strong>12.04.2024</strong>
            <br />
            11:25
          </td>
          <td>Pierwsze</td>
        </tr>
        <tr>
          <td>
            <strong>11.04.2024</strong>
            <br />
            12:33
          </td>
          <td>Drugie</td>
        </tr>
        <tr>
          <td>
            <strong>10.04.2024</strong>
            <br />
            11:24
          </td>
          <td>Pierwsze</td>
        </tr>
        <tr>
          <td>
            <strong>10.04.2024</strong>
            <br />
            11:27
          </td>
          <td>Drugie</td>
        </tr>
        <tr>
          <td>
            <strong>09.04.2024</strong>
            <br />
            11:23
          </td>
          <td>Drugie</td>
        </tr>
      </table>
    </>
  );
};
