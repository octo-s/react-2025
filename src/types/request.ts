import type { AppDispatch, RootState } from "../redux/store";

export const REQUEST_STATUSES = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
} as const;

export type RequestStatus =
  (typeof REQUEST_STATUSES)[keyof typeof REQUEST_STATUSES];

export type RequestState = Record<string, RequestStatus>;

export type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: RootState;
};

export type DispatchedAsyncThunkResult = {
  requestId: string;
  abort?: () => void;
};

export type RequestResult = {
  isLoading: boolean;
  isError: boolean;
  isIdle: boolean;
};
