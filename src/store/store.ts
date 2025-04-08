import { create } from "zustand";

import { ChartActions,ChartState, createChartSlice } from "./slice/chartSlice"; 
import { createUsersSlice, UsersAction, UsersState } from "./slice/usersSlice";
import { createModalSlice, ModalAction, ModalState } from "./slice/modalSlice";

type StoreState = ChartState & UsersState&ModalState
type StoreActions = ChartActions &UsersAction &ModalAction

export const useBoundStore = create<StoreState & StoreActions>((...a) => ({
    ...createChartSlice(...a),
    ...createUsersSlice(...a),
    ...createModalSlice(...a)

}));