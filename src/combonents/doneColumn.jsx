import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux/taskSlise";
import TaskCard from "./taskCard";

function DoneColumn() {
  // const tasks = useSelector((state) => state.tasks.tasks);
  // const doneTasks = tasks?.filter((task) => task.status === "done") || [];

  
  const dispatch = useDispatch();
  const { tasks: tasksData, loading } = useSelector(
    (state) => state.tasks
  );
  const tasks = Array.isArray(tasksData) ? tasksData : [];
  const doneTasks = tasks.filter((task) => task.status === "done");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading === "true") {
    return <p>Please wate to loading the Tasks...</p>;
  }

  return (
    <div className="w-[300px] flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
        <h2 className="text-gray-400 font-bold tracking-widest text-sm uppercase">
          Done ({doneTasks?.length || 0})
        </h2>
      </div>

      <div className="flex flex-col gap-4 h-full">
        {doneTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default DoneColumn;
