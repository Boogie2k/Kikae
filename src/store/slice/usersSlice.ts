import { UserProfile } from "@/types/types";
import { StateCreator } from "zustand";

export type UsersState = {
    allUsers: UserProfile[];
    deactivatedUsers: UserProfile[];
}

export type UsersAction={
    setAllUsers: (users: UserProfile[]) => void;
    setDeactivatedUsers: (users: UserProfile[]) => void;
}


const initialState: UsersState = {

    allUsers: [],
    deactivatedUsers: []
}

export const createUsersSlice: StateCreator<UsersState & UsersAction> = (set) => ({
...initialState,
    setAllUsers: (users) => set({allUsers: users}),
    setDeactivatedUsers: (users) => set({deactivatedUsers: users}),

})
