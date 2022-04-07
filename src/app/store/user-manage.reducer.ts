import { createReducer, on } from '@ngrx/store';
import { createUser, setUsers, updateUser, deleteUser } from './user.actions';
import { User } from '../components/users-management/User';
export const initializeState: User[] = [];
export const userManageReducer = createReducer(
  initializeState,
  on(createUser, (state, user: User) => [...state, user]),
  on(updateUser, (state, user: User) => {
    let temp = [...state];
    temp = temp.map((obj) => obj.username === user.username ? {...obj,...user} : obj );
    return temp;
  }),
  on(setUsers, (state, data: {listUsers: User[]}) =>{
    return [...state, ...data.listUsers];
  }),
  on(deleteUser, (state, data: {username: string}) => {
    return state.filter((user) => user.username !== data.username);
  })
);
