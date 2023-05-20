import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 'null', // Başlangıç olarak kullanıcı değerini bilemediğimiz için null olarak veriyoruz.
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = auth.actions;
export default auth.reducer;
