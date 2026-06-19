import React from "react";

function Header({ setIsModalOpen }) {
  return (
    <div className="bg-[#2b2c37] text-white p-8 h-20 flex items-center justify-between border-b border-gray-600">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold tracking-widest">KANBAN APP</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="bg-[#635fc7] hover:bg-[#a8a4ff] transition-color py-2 px-6 rounded-full font-semibold"
          onClick={() => setIsModalOpen(true)}
        >
          New Task
        </button>
      </div>
    </div>
  );
}

export default Header;
