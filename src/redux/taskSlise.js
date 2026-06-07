import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch(
    "https://69edb693af4ff533142bdcda.mockapi.io/kanban/api/tasks"
  );
  return response.json();
});

export const addTask = createAsyncThunk("tasks/addTask", async (newItem) => {
  const response = await fetch(
    "https://69edb693af4ff533142bdcda.mockapi.io/kanban/api/tasks",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }
  );

  return response.json();
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  const response = await fetch(
    `https://69edb693af4ff533142bdcda.mockapi.io/kanban/api/tasks/${id}`,
    {
      method: "DELETE",
    }
  );
});

export const updateTask = createAsyncThunk(
  "update/updateTask",
  async (updatedTask) => {
    const response = await fetch(
      `https://69edb693af4ff533142bdcda.mockapi.io/kanban/api/tasks/${updatedTask.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      }
    );
    const data = await response.json();
    return data;
  }
);

const taskSlise = createSlice({
  name: "tasks",
  initialState: { tasks: [], loading: false, error: null, currentTask: null },

  reducers: {
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
      console.log(action.payload);
    },

    clearCurrentTask: (state) => {
      state.currentTask = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })

      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })

      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.meta.arg);
      })

      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      });
  },
});

export default taskSlise.reducer;
export const { setCurrentTask, clearCurrentTask } = taskSlise.actions;
