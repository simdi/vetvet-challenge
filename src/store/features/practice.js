import { createSlice } from '@reduxjs/toolkit';
import ApiService from '../../services/apiService';

const practicesSlice = createSlice({
  name: 'practices',
  initialState: {
    isLoading: false,
    data: null,
    error: null
  },
  reducers: {
    getPractices(state) {
      state.isLoading = true;
      state.error = null;
    },
    getPracticesError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    getPracticesSuccess(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    }
  }
});

export const {
  getPractices,
  getPracticesError,
  getPracticesSuccess
} = practicesSlice.actions;

export const getPracticesStart = () => async (dispatch) => {
  try {
    dispatch(getPractices());
    const { data } = await ApiService.getPractices();
    dispatch(getPracticesSuccess(data));
  } catch (e) {
    dispatch(getPracticesError(e.message));
  }
};

export default practicesSlice.reducer;
