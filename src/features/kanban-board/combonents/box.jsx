import React from "react";
import TodoColumn from "./todoColumn";
import DoingColumn from "./doingColumn";
import DoneColumn from "./doneColumn";

function Box() {
  return (
    <div className="bg-[#20212c] h-[calc(100vh-80px)] p-6 overflow-x-auto">
      <div className="flex justify-start gap-10 h-full max-w-7xl mx-auto">
        <TodoColumn />
        <DoingColumn />
        <DoneColumn />
      </div>
    </div>
  );
}

export default Box;
