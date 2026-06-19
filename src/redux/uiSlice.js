import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "notics",
  initialState: {
    toast: {
      show: false,
      message: "",
      type: "success",
    },

    confirmDialog: {
      show: false,
      message: "",
      onConfirm: null,
      targetId: null,
    },
  },
  reducers: {
    showToastAction: (state, action) => {
      state.toast.show = true;
      state.toast.message = action.payload.message;
      state.toast.type = action.payload.type || "success";
    },

    hideToastAction: (state) => {
      state.toast.show = false;
    },

    openConfirmDialog: (state, action) => {
      state.confirmDialog.show = true;
      state.confirmDialog.message = action.payload.message;
      state.confirmDialog.targetId = action.payload.targetId;
    },

    closeConfirmDialog: (state, action) => {
      state.confirmDialog.show = false;
      state.confirmDialog.targetId = null;
    },
  },
});

export default uiSlice.reducer;
export const {
  showToastAction,
  hideToastAction,
  openConfirmDialog,
  closeConfirmDialog,
} = uiSlice.actions;
