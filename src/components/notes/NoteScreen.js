import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="note__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          className="note__title-input"
          placeholder="Some awesome title"
          type="text"
        />
        <textarea
          className="note__textarea"
          placeholder="What happened today"
          cols="20"
          rows="8"
        ></textarea>
        <div className="note__image">
          <img
            src="https://s1.significados.com/foto/shutterstock-273030704_sm.jpg"
            alt="arbol"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
