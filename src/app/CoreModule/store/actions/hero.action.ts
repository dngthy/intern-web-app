import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/HeroModule/components/hero-list/Hero';

export const createHero = createAction('[Hero] Create new user into database',props<{payload: Hero}>());
export const createHeroSuccess = createAction('[Hero] Push new user to storage', props<Hero>());
export const getHeros = createAction('[Heros] Get Heros');
export const getHerosSuccess = createAction('[Heros] Get Heros Successfully',props<{payload: Hero[]}>());
export const deleteHero = createAction('[Hero] Delete Hero in database', props<{id: number}>());
export const deleteHeroSuccess = createAction('[Hero] Delete Hero in storage', props<{id: number}>());
export const deleteMultiHeros = createAction('[Hero] Delete Multi Heros in database', props<{payload: number[]}>());
export const deleteMultiHerosSuccess = createAction('[Hero] Delete Multi Heros in storage', props<{payload: number[]}>());
