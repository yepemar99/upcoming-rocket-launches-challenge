import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { launchesReducer } from "./redux/reducers/LaunchesReducer";
import { ILaunchesState } from "./redux/types/launchesTypes";

export interface IApplicationState {
  launches: ILaunchesState;
}

const rootReducer = combineReducers<IApplicationState>({
  launches: launchesReducer,
});

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  /* store.subscribe(
    ()=>{
      console.log("state",store.getState());
      
    }
  ) */
  return store;
}
