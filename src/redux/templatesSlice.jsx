import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  templates: [],
};

const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    addTemplate: (state, action) => {
      state.templates.push(action.payload);
    },
  },
});

export const { addTemplate } = templatesSlice.actions;
export default templatesSlice.reducer;
