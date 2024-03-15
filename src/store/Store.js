import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import NavbarSlice from "./NavbarSlice";
import NotificationSlice from "./NotificationSlice";

const Store = configureStore({
    reducer:{
        login:LoginSlice,
        navbar:NavbarSlice,
        notification:NotificationSlice,
    },

})

export default Store