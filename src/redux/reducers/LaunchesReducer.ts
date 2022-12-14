import { Reducer } from "redux";
import {
  ILaunchesState,
  LaunchesActions,
  LaunchesActionTypes,
} from "../types/launchesTypes";

export const initialGeneralInfo: ILaunchesState = {
  loadingLunch: false,
  loadingLaunches: false,
  lunch: null,
  launches: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  offset: 0,
};

export const launchesReducer: Reducer<ILaunchesState, LaunchesActions> = (
  state = initialGeneralInfo,
  action
) => {
  switch (action.type) {
    // TODO - change the state
    case LaunchesActionTypes.LOADING_GET_ALL: {
      return {
        ...state,
        loadingLaunches: action.payload,
      };
    }
    case LaunchesActionTypes.GET_ALL: {
      return {
        ...state,
        launches: { ...action.payload },
        loadingLaunches: false,
      };
    }
    case LaunchesActionTypes.LOADING_GET_ONE: {
      return {
        ...state,
        loadingLunch: action.payload,
      };
    }
    case LaunchesActionTypes.GET_ONE: {
      return {
        ...state,
        lunch: action.payload ? { ...action.payload } : null,
        loadingLunch: false,
      };
    }
    case LaunchesActionTypes.SET_OFFSET: {
      return {
        ...state,
        offset: action.payload,
      };
    }
  }
  return state;
};
