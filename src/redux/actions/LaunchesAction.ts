import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import LunchServices from "../../api/services/LunchServices";
import { ILaunches } from "../../types/launchesTypes";

import {
  ILaunchesGetAllAction,
  ILaunchesGetAllLoadingAction,
  ILaunchesGetOneAction,
  ILaunchesGetOneLoadingAction,
  ILaunchesState,
  ILaunchSetOffsetAction,
  LaunchesActionTypes,
} from "../types/launchesTypes";

/* Actions */

const loadingLaunches: ActionCreator<ILaunchesGetAllLoadingAction> = (
  loading: boolean
) => {
  return {
    type: LaunchesActionTypes.LOADING_GET_ALL,
    payload: loading,
  };
};

export const getLaunches: ActionCreator<
  ThunkAction<Promise<AnyAction>, ILaunchesState, string, ILaunchesGetAllAction>
> = (config?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingLaunches(true));
    const launchesServices = new LunchServices();

    let launches: ILaunches = {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };

    await launchesServices
      .getAllUpcoming(config)
      .then((res: any) => {
        launches = res;
      })
      .catch((err) => {
        console.log(err);
      });

    return dispatch({
      payload: launches,
      type: LaunchesActionTypes.GET_ALL,
    });
  };
};
const loadingLaunch: ActionCreator<ILaunchesGetOneLoadingAction> = (
  loading: boolean
) => {
  return {
    type: LaunchesActionTypes.LOADING_GET_ONE,
    payload: loading,
  };
};

export const getLaunch: ActionCreator<
  ThunkAction<Promise<AnyAction>, ILaunchesState, string, ILaunchesGetOneAction>
> = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingLaunch(true));
    const launchesServices = new LunchServices();

    let launches: any = null;

    await launchesServices
      .getOneLunch(id)
      .then((res: any) => {
        launches = res;
      })
      .catch((err) => {
        console.log(err);
      });

    return dispatch({
      payload: launches,
      type: LaunchesActionTypes.GET_ONE,
    });
  };
};

export const setPageOffset: ActionCreator<ILaunchSetOffsetAction> = (
  page: number
) => {
  const offset = page * 10 - 10;
  return {
    type: LaunchesActionTypes.SET_OFFSET,
    payload: offset,
  };
};
