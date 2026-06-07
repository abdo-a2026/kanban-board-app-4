import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/taskSlise";

import TaskCard from "./taskCard";

function TodoColumn() {
  // const tasks = useSelector((state) => state.tasks.tasks);
  // const todoTasks = tasks?.filter((task) => task.status === "todo") || [];

  const dispatch = useDispatch();
  const { tasks: tasksData, loading } = useSelector((state) => state.tasks);
  const tasks = Array.isArray(tasksData) ? tasksData : [];
  const todoTasks = tasks.filter((task) => task.status === "todo");

  if (loading === "true") {
    console.log("loading==================");
    return <p>Please wate to loading the Tasks...</p>;
  }

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  // console.log(tasks);
  // console.log(todoTasks);

  return (
    <div className="w-[300px] flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
        <h2 className="text-gray-400 font-bold tracking-widest text-sm uppercase">
          Todo ({todoTasks?.length || 0})
        </h2>
      </div>

      <div className="flex flex-col gap-4 h-full">
        {todoTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TodoColumn;
