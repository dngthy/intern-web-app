import { createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/HeroModule/components/hero-list/Hero';
import {
  createHeroSuccess,
  deleteHeroSuccess,
  deleteMultiHerosSuccess,
  getHerosSuccess,
} from '../actions/hero.action';
export const initializeState: Hero[] = [];
export const heroManageReducer = createReducer(
  initializeState,
  on(createHeroSuccess, (state, hero: Hero) => [...state, hero]),
  on(deleteHeroSuccess, (state, data: { id: number }) =>
    state.filter((hero) => hero.id !== data.id)
  ),
  on(getHerosSuccess, (state, data: { payload: Hero[] }) => data.payload),
  on(deleteMultiHerosSuccess, (state, data: { payload: number[]}) => {
    return state.filter(hero => !data.payload.includes(hero.id))
  })
);
