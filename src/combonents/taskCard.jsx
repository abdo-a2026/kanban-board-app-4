import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlise";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setCurrentTask } from "../redux/taskSlise";

function TaskCard({ task }) {
  // console.log(task);
  if (!task) {
    return null;
  }

  const [updateModalOpen, setIsUpdateModalOpen] = useState(false);

  // const { currentTask } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handlerDelete = async () => {
    if (window.confirm(`You want delete the task: ${task.name}?`)) {
      dispatch(deleteTask(task.id));
    }
  };

  const handleEdit = () => {
    console.log(task);
    dispatch(setCurrentTask(task));
  };

  return (
    <div className="bg-[#2b2c37] p-5 rounded-lg shadow-md cursor-pointer group hover:shadow-xl transition-all">
      <div className="mb-4">
        <h3 className="text-white font-bold text-md mb-1 group-hover:text-[#635fc7] transition-colors">
          {task.name}
        </h3>
        <p className="text-gray-400 text-xs font-semibold">
          {task.descrebtion}
        </p>
      </div>

      <div className="flex gap-4 pt-3 border-t border-gray-700 justify-end">
        <button
          className="text-xs text-blue-400 hover:underline font-bold"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="text-xs text-red-400 hover:underline font-bold"
          onClick={handlerDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
