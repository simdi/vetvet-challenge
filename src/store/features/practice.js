import { createSlice } from '@reduxjs/toolkit';
import ApiService from '../../services/apiService';

const practicesSlice = createSlice({
  name: 'practices',
  initialState: {
    isLoading: false,
    data: [],
    meta: null,
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
      const { practices, meta } = payload;
      state.isLoading = false;
      state.error = null;
      state.meta = meta;
      state.data = practices;
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
    console.log({ data });
    dispatch(getPracticesSuccess(data));
  } catch (e) {
    dispatch(getPracticesError(e.message));
  }
};

export default practicesSlice.reducer;
