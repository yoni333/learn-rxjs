import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { AppState, IStateEvent } from '../store/event'


export const selectFeature :MemoizedSelector<object,IStateEvent>= createFeatureSelector<AppState, IStateEvent>('events');

export const eventsFeature:MemoizedSelector<object,IStateEvent> = createSelector(
  selectFeature,
  (state):IStateEvent=>state.events
)

export const selectFeatureCity:MemoizedSelector<object,string[]> = createSelector(
  eventsFeature,
  (state: IStateEvent) :string[]=> state.events.map(event=>event.city)
);