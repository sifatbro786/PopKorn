import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../store/reducers/movieSlice";
import tvReducer from "../store/reducers/tvSlice";
import peopleReducer from "../store/reducers/personSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        tv: tvReducer,
        people: peopleReducer,
    },
});

export default store;
