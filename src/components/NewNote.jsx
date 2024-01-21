import React from "react";
import "../css/main.css";

export default function NewNote() {
  return (
    <form className="new-note">
      {/* <form className="new-note__container"> */}
        <textarea
          rows="10" cols="40"
          type="text"
          className="new-note__text"
        />
        <button className="new-note__button-submit material-icons">send</button>
      {/* </form> */}
    </form>
  );
}
