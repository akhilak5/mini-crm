import { createSlice } from '@reduxjs/toolkit';

const initialState = { leads: [] };

const leadSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    addLead(state, action) { state.leads.push(action.payload); },
    editLead(state, action) {
      const index = state.leads.findIndex(l => l.id === action.payload.id);
      if (index !== -1) state.leads[index] = action.payload;
    },
    deleteLead(state, action) {
      state.leads = state.leads.filter(l => l.id !== action.payload);
    },
  },
});

export const { addLead, editLead, deleteLead } = leadSlice.actions;
export default leadSlice.reducer;

