import { createAction, props } from '@ngrx/store';
import { User } from '../components/users-management/User';

export const createUser = createAction('[User] Create User', props<User>());
export const setUsers = createAction('[Users] Set Users', props<{ listUsers: User[] }>());
export const updateUser = createAction('[User] Update User', props<User>());
export const deleteUser = createAction('[User] Delete User', props<{username: string}>());
