import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/HeroModule/pages/users-management/User';

export const createUser = createAction('[User] Create new user into database',props<{payload: User}>());
export const createUserSuccess = createAction('[User] Push new user to storage', props<User>());
export const setUsers = createAction('[Users] Set Users', props<{ listUsers: User[] }>());
export const getUsersFromApi = createAction('[Users] Get Users');
export const getUsersFromApiSuccess = createAction('[Users] Get Users Successfully',props<{payload: User[]}>());
export const updateUser = createAction('[User] Update user in database', props<User>());
export const updateUserSuccess = createAction('[User] Update user in storage ', props<User>());
export const deleteUser = createAction('[User] Delete user in database', props<{username: string}>());
export const deleteUserSuccess = createAction('[User] Delete user in storage', props<{username: string}>());
