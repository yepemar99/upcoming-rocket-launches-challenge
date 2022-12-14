import { ILaunches } from "../../types/launchesTypes";

export enum LaunchesActionTypes {
  GET_ALL = "LauncheS/GET/ALL",
  LOADING_GET_ALL = "LauncheS/GET/ALL/LOADING",
  GET_ONE = "LauncheS/GET/ONE",
  LOADING_GET_ONE = "LauncheS/GET/ONE/LOADING",
  SET_OFFSET = "LAUNCHES/SET/OFFSET",
}

export interface ILaunchesGetAllLoadingAction {
  type: LaunchesActionTypes.LOADING_GET_ALL;
  payload: boolean;
}
export interface ILaunchesGetAllAction {
  type: LaunchesActionTypes.GET_ALL;
  payload: ILaunches;
}

export interface ILaunchesGetOneLoadingAction {
  type: LaunchesActionTypes.LOADING_GET_ONE;
  payload: boolean;
}
export interface ILaunchesGetOneAction {
  type: LaunchesActionTypes.GET_ONE;
  payload: any;
}
export interface ILaunchSetOffsetAction {
  type: LaunchesActionTypes.SET_OFFSET;
  payload: number;
}

export type LaunchesActions =
  | ILaunchesGetAllAction
  | ILaunchesGetOneAction
  | ILaunchesGetAllLoadingAction
  | ILaunchesGetOneLoadingAction
  | ILaunchSetOffsetAction;

export interface ILaunchesState {
  readonly launches: ILaunches;
  readonly lunch: any;
  readonly loadingLaunches: boolean;
  readonly loadingLunch: boolean;
  readonly offset: number;
}
