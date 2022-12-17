import React from "react";

const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>28 de junio 2022</span>

      <div className="">
        <button className="btn btn-secondary">Picture</button>
        <button className="btn btn-secondary">Save</button>
      </div>
    </div>
  );
};

export default NotesAppBar;
