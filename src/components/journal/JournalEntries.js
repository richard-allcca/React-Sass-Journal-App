import React from "react";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="journal__entries">
      {entries.map((value) => {
        return <JournalEntry key={value} />;
      })}
    </div>
  );
};

export default JournalEntries;
