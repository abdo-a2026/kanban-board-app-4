import { configureStore } from "@reduxjs/toolkit";

import tasks from "./taskSlise";

const store = configureStore({
  reducer: { tasks: tasks },
});

export default store;
