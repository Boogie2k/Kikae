import { create } from "zustand";

import { ChartActions, ChartState, createChartSlice } from "./slice/chartSlice";
import { createUsersSlice, UsersAction, UsersState } from "./slice/usersSlice";
import { createModalSlice, ModalAction, ModalState } from "./slice/modalSlice";
import {
  createOrdersSlice,
  OrdersAction,
  OrdersState,
} from "./slice/ordersSlice";

type StoreState = ChartState & UsersState & ModalState & OrdersState;
type StoreActions = ChartActions & UsersAction & ModalAction & OrdersAction;

export const useBoundStore = create<StoreState & StoreActions>((...a) => ({
  ...createChartSlice(...a),
  ...createUsersSlice(...a),
  ...createModalSlice(...a),
  ...createOrdersSlice(...a),
}));
