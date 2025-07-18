import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./JobSlice"

export const store = configureStore({
    reducer: {
        job : jobSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch