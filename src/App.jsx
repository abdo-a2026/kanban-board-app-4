import { useState } from "react";
import { useSelector } from "react-redux";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./combonents/layout/header";
import Box from "./features/kanban-board/combonents/box";
import NewTaskForm from "./features/kanban-board/combonents/newTaskForm";
import UpdateTaskForm from "./features/kanban-board/combonents/updateTaskForm";
import Toast from "./combonents/ui/toast";
import ConfirmDialog from "./combonents/ui/confirmDialog";

function App() {
  // const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(true);
  const { currentTask } = useSelector((state) => state.tasks);

  return (
    <>
      <div className="min-h-screen flex flex-col font-sans w-full">
        <Header setIsModalOpen={setIsModalOpen} />
        <Box />
        <Toast />
        <ConfirmDialog />
        {isModalOpen && <NewTaskForm setIsModalOpen={setIsModalOpen} />}
        {currentTask && <UpdateTaskForm />}
      </div>
    </>
  );
}

export default App;
