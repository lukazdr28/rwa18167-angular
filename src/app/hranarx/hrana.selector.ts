import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { HranaState } from "./hranarx.reducer";
import { Hrana } from "../hrana/hranaDTO";

export const selectHrana = (state:AppState) => {return state.hrana}
export const selectAllHrana = createSelector(selectHrana,(state:HranaState) => Object.values(state.entities) as Hrana[])