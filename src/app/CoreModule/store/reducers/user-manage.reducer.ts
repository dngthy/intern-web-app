import { createReducer, on } from '@ngrx/store';
import {
  createUserSuccess,
  setUsers,
  updateUserSuccess,
  deleteUserSuccess,
  getUsersFromApiSuccess,
} from '../actions/user.actions';
import { User } from 'src/app/HeroModule/pages/users-management/User';
export const initializeState: User[] = [];
export const userManageReducer = createReducer(
  initializeState,
  on(createUserSuccess, (state, user: User) => [...state, user]),
  on(updateUserSuccess, (state, user: User) =>
    state.map((obj) =>
      obj.username === user.username ? { ...obj, ...user } : obj
    )
  ),
  on(setUsers, (state, data: { listUsers: User[] }) => [
    ...state,
    ...data.listUsers,
  ]),
  on(deleteUserSuccess, (state, data: { username: string }) =>
    state.filter((user) => user.username !== data.username)
  ),
  on(getUsersFromApiSuccess, (state, data: { payload: User[] }) => data.payload)
);
