import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Hero } from 'src/app/HeroModule/components/hero-list/Hero';
import { HeroService } from 'src/app/ShareModule/services/hero.service';
import {
  getHeros,
  getHerosSuccess,
  createHero,
  createHeroSuccess,
  deleteHero,
  deleteHeroSuccess,
  deleteMultiHeros,
  deleteMultiHerosSuccess,
} from '../actions/hero.action';

@Injectable()
export class HeroManageEffects {
  loadHeros$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeros),
      mergeMap(() =>
        this._heroService.getListHero().pipe(
          map((heros) => getHerosSuccess({ payload: <Hero[]>heros })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  createHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createHero),
      map((data) => data.payload),
      mergeMap((hero) =>
        this._heroService.createHero(hero).pipe(
          map((_) => createHeroSuccess(hero)),
          catchError(() => EMPTY)
        )
      )
    )
  );
  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteHero),
      map((data) => data.id),
      mergeMap((id) =>
        this._heroService.deleteHero(id).pipe(
          map((_) => deleteHeroSuccess({ id })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  deleteMultiHeros$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteMultiHeros),
    map((data) => data.payload),
    mergeMap((id) =>
      this._heroService.deleteMultiHeros(id).pipe(
        map(_ => deleteMultiHerosSuccess({ payload: id })),
        catchError(() => EMPTY)
      )
    )
  )
);

  constructor(private actions$: Actions, private _heroService: HeroService) {}
}
