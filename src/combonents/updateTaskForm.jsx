import { current } from "@reduxjs/toolkit";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCurrentTask } from "../redux/taskSlise";
import { updateTask } from "../redux/taskSlise";

function UpdateTaskForm() {
  const dispatch = useDispatch();

  const task = useSelector((state) => state.tasks.currentTask);
  console.log("task in form===========" + task);

  const [name, setName] = useState(task?.name || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState("todo");

  const handlCloseForm = () => {
    dispatch(clearCurrentTask());
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTask = { id: task.id, name, description, status };
    await dispatch(updateTask(updatedTask))
      .unwrap()
      .then(() => {
        dispatch(clearCurrentTask());
        alert("The task is added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData);
  };

  const handleOverLayClick = (e) => {
    if (e.target === e.currentTarget) {
      handlCloseForm();
    }
  };

  return (
    <div>
      <div
        onClick={handleOverLayClick}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      >
        <div className="bg-[#2b2c37] w-full max-w-md p-8 rounded-xl shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-xl font-bold">
              Edit The Task: {task.name}
            </h2>
            <button
              className="text-gray-400 hover:text-red-500 text-2xl font-bold"
              onClick={handlCloseForm}
            >
              ×
            </button>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
            <div>
              <label className="block text-gray-400 text-xs font-bold mb-2 uppercase">
                Task Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="e.g. Take coffee break"
                className="w-full bg-transparent border border-gray-600 rounded p-2 text-white text-sm focus:border-[#635fc7] outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-bold mb-2 uppercase">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="e.g. It's always good to take a break."
                className="w-full bg-transparent border border-gray-600 rounded p-2 text-white text-sm h-24 focus:border-[#635fc7] outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-bold mb-2 uppercase">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                className="w-full bg-transparent border border-gray-600 rounded p-2 text-white text-sm focus:border-[#635fc7] outline-none"
              >
                <option className="bg-[#2b2c37]" value={"todo"}>
                  Todo
                </option>
                <option className="bg-[#2b2c37]" value={"doing"}>
                  Doing
                </option>
                <option className="bg-[#2b2c37]" value={"done"}>
                  Done
                </option>
              </select>
            </div>

            <button
              className="bg-[#635fc7] text-white w-full py-2 rounded-full font-bold mt-4 hover:bg-[#a8a4ff] transition-all"
              type="submit"
            >
              Update Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTaskForm;
