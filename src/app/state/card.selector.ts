import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CardState } from "./card.reducer";

const getUserState = createFeatureSelector<CardState>('card');

export const getUser = createSelector(getUserState, (state) => {
    return state.user;
});
