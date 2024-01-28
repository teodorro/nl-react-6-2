import React from "react";
import "../css/main.css";
import PropTypes from "prop-types";
import Note from "./Note";

export default function Notes({ notes, update}) {
  console.log(notes);

  return (
    <div className="notes__container">
        {notes.map((x) => (
          <div key={x.id}>
            <Note note={x} update={update}/>
          </div>
        ))}
    </div>
  );
}

Notes.propTypes = {
  notes: PropTypes.array,
  update: PropTypes.func,
};
