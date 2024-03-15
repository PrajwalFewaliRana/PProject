import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navbarState: false,
  };
  
  const NavbarSlice = createSlice({
    initialState,
    name: "navbar",
    reducers: {
      setOpenNavbar: (state, action) => {
        state.navbarState = action.payload.navbarState;
      },
      setCloseNavbar: (state, action) => {
        state.navbarState = action.payload.navbarState;
      },
    },
  });
  
  export const { setOpenNavbar, setCloseNavbar } = NavbarSlice.actions;
  export const selectnavbarState = (state) => state.navbar.navbarState;
  export default NavbarSlice.reducer;