import { configureStore } from "@reduxjs/toolkit";
import CurrentUserSlice from "./StateManagement/CurrentUserFetch"
import FetchAJob from "./StateManagement/FetchAJob";


export const store = configureStore({
    reducer: {
       CurrentUserSlice,
       FetchAJob
    }
})