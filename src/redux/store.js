import { configureStore } from "@reduxjs/toolkit";

import tasks from "../features/kanban-board/services/taskSlice";
import notics from "./uiSlice";

const store = configureStore({
  reducer: { tasks: tasks, notics: notics },
});

export default store;
