import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectRequestStatus } from "../entities/request/requestSlice";
import {
  type DispatchedAsyncThunkResult,
  REQUEST_STATUSES,
  type RequestResult,
  type ThunkApiConfig,
} from "../../types/request";
import type { AsyncThunk } from "@reduxjs/toolkit";
import { type RootState, useAppDispatch } from "../store";
import { useCallback } from "react";

function useInternalRequest(
  dispatchThunk: () => DispatchedAsyncThunkResult,
): RequestResult {
  const [request, setRequest] = useState<DispatchedAsyncThunkResult | null>(
    null,
  );

  const requestStatus = useSelector((state: RootState) =>
    request?.requestId
      ? selectRequestStatus(state, request.requestId)
      : REQUEST_STATUSES.IDLE,
  );

  useEffect(() => {
    const req = dispatchThunk();
    setRequest(req);

    return () => {
      req?.abort?.();
      setRequest(null);
    };
  }, [dispatchThunk]);

  return {
    isIdle: requestStatus === REQUEST_STATUSES.IDLE,
    isLoading: requestStatus === REQUEST_STATUSES.PENDING,
    isError: requestStatus === REQUEST_STATUSES.REJECTED,
  };
}

export function useRequest<TReturn>(
  thunk: AsyncThunk<TReturn, string, ThunkApiConfig>,
  params: string,
): RequestResult {
  const dispatch = useAppDispatch();

  const dispatchThunk = useCallback(() => {
    return dispatch(thunk(params));
  }, [dispatch, params, thunk]);
  return useInternalRequest(dispatchThunk);
}

export const useEmptyRequest = <TReturn>(
  thunk: AsyncThunk<TReturn, void, ThunkApiConfig>,
): RequestResult => {
  const dispatch = useAppDispatch();
  const dispatchThunk = useCallback(() => {
    return dispatch(thunk());
  }, [dispatch, thunk]);

  return useInternalRequest(dispatchThunk);
};
