import { configureStore } from "@reduxjs/toolkit";
import actorDetail from "../services/actorDetailsSlice";

export const store = configureStore({
    reducer : {
        app: actorDetail,
    }
});