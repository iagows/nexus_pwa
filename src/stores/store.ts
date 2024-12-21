import { combineReducers, configureStore } from "@reduxjs/toolkit";
import drawer from "./slices/drawer";
import ficha from "./slices/ficha";
import edition from "./slices/edit";

export const store = configureStore({
	reducer: combineReducers({
		drawer,
		ficha,
		edition,
	}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
