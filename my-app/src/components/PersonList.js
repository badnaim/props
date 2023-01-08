import React from "react";
import Person from "./Person";

function NameList1() {
  const persons = [
    { id: 1, name: "Bruce", age: 30, skill: "React" },
    { id: 2, name: "John", age: 31, skill: "Bootstrap" },
    { id: 3, name: "Guy", age: 32, skill: "Javascript" },
    { id: 4, name: "Boy", age: 33, skill: "HTML, CSS" },
  ];
  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
}
export default NameList1;
