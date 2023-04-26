import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from "../reducer/PackageSlice";


export const store = configureStore({
    reducer: {
        packages: packagesReducer,
    },
})