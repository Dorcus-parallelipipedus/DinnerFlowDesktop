import React from "react";
import { PersonInfo } from "./components/PersonInfo";

const person = [
  {
    firstname: "Jan",
    lastname: "Kowalski",
    class: "3TP",
    id: 1,
  },
  {
    firstname: "Michał",
    lastname: "Wójcik",
    class: "2TP",
    id: 2,
  },
  {
    firstname: "Klara",
    lastname: "Woźniak",
    class: "3E",
    id: 3,
  },
  {
    firstname: "Karol",
    lastname: "Kozłowski",
    class: "2D",
    id: 4,
  },
  {
    firstname: "Laura",
    lastname: "Szymańska",
    class: "3E",
    id: 5,
  },
  {
    firstname: "Nikodem",
    lastname: "Kamiński",
    class: "2TP",
    id: 6,
  },
  {
    firstname: "Antoni",
    lastname: "Zieliński",
    class: "1A",
    id: 7,
  },
  {
    firstname: "Milena",
    lastname: "Pietrzak",
    class: "4C",
    id: 8,
  },
  {
    firstname: "Anastazja",
    lastname: "Kołodziej",
    class: "3D",
    id: 9,
  },
  {
    firstname: "Kornelia",
    lastname: "Dąbrowska",
    class: "1TP",
    id: 10,
  },
];

export const List = () => {
  return (
    <>
      <div>
        <h2>Lista uczniów</h2>
      </div>
    </>
  );
};
