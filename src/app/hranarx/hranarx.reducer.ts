import { createReducer, on } from "@ngrx/store";
import { Hrana } from "../hrana/hranaDTO";
import { ucitajHranu, ucitajHranuOK } from "./hranarx.actions";

export interface HranaState {
    hrana:Hrana[]
    error:string
}

export const pocetno:HranaState = {
    hrana:[],
    error:''
}

export const hranaReducer = createReducer(pocetno,
    on(ucitajHranuOK, (state,{hrana}) => ({
        ...state,
        hrana:hrana,
        error:''
    })))
