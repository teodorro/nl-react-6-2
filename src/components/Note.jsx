import React, {useState} from "react";
import "../css/main.css";
import PropTypes from "prop-types";
import noteService from "../service/note-service";

export default function Note({ note, update }) {
  const [id] = useState(note.id)

  async function deleteNote() {
    const res = await noteService.deleteNote(id);
    if (res) {
      await update();
    }
  }

  return (
    <>
      <div className="note">
        {note[0]}
        <button className="note__button-delete material-icons"
        onClick={deleteNote}>close</button>
      </div>
    </>
  );
}

Note.propTypes = {
  note: PropTypes.string,
  update: PropTypes.func,
};
