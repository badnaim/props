import React from "react";
import "./styles/person.css";

function Person({ person }) {
  return (
    <div className="two">
      <div className="one">
        <h2>
          I am {person.name} I am {person.age} years old. I know {person.skill}
        </h2>
      </div>
    </div>
  );
}

export default Person;
