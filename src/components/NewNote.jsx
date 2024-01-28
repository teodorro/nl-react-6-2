import { useState } from "react";
import "../css/main.css";
import noteService from "../service/note-service";

export default function NewNote({update}) {
  const [text, setText] = useState("");
  return (
    <form className="new-note__container">
      <textarea
        rows="5"
        cols="40"
        type="text"
        className="new-note__text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      >
      </textarea>
      <button
        className="new-note__button-submit material-icons"
        type="submit"
        onClick={async (e) => {
          e.preventDefault();
          await noteService.addNote([text]);
          setText("");
          await update();
        }}
      >
        send
      </button>
    </form>
  );
}
