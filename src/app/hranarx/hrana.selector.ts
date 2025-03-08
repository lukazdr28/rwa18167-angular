import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { HranaState } from "./hranarx.reducer";
import { Hrana } from "../hrana/hranaDTO";

export const selectHrana = (state:AppState) => {console.log(state.hrana.hrana);return state.hrana}
export const selectAllHrana = createSelector(selectHrana,(state:HranaState) => state.hrana)