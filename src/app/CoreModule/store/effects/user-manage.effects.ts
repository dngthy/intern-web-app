import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/AuthModule/services/user.service';
import {
  createUser,
  createUserSuccess,
  deleteUser,
  deleteUserSuccess,
  getUsersFromApi,
  getUsersFromApiSuccess,
  updateUser,
  updateUserSuccess,
} from '../actions/user.actions';

@Injectable()
export class UserManageEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersFromApi),
      mergeMap(() =>
        this._userService.getListUsers().pipe(
          map((users) => getUsersFromApiSuccess({ payload: users })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      map((data) => data.payload),
      mergeMap((user) =>
        this._userService.addUser(user).pipe(
          map((_) => createUserSuccess(user)),
          catchError(() => EMPTY)
        )
      )
    )
  );
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      mergeMap((user) =>
        this._userService.updateUser(user).pipe(
          map((_) => updateUserSuccess(user)),
          catchError(() => EMPTY)
        )
      )
    )
  );
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      map((data) => data.username),
      mergeMap((username) =>
        this._userService.deleteUser(username).pipe(
          map((_) => deleteUserSuccess({ username })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(private actions$: Actions, private _userService: UserService) {}
}
