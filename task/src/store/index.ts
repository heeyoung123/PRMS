import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer/reducer.ts";

const store = configureStore({
	reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

// const dispatch = useDispatch();
// const logger=useSelector((state: RootState)=>state.logger)


store.getState();
export default store;