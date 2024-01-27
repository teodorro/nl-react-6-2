import React from "react";
import "../css/main.css";
import PropTypes from "prop-types";
import Note from "./Note";

export default function Notes({ notes }) {
  console.log(notes);

  return (
    <div className="notes">
      <div className="notes__container">
        {notes.map((x) => (
          <div key={x.id}>
            <Note note={x[0]}/>
          </div>
        ))}
      </div>
    </div>
  );
}

Notes.propTypes = {
  notes: PropTypes.array,
};
