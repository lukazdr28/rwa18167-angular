import { createReducer, on } from "@ngrx/store";
import { Hrana } from "../hrana/hranaDTO";
import { izmeniHranu, napraviHranu, ucitajHranu, ucitajHranuOK, ukloniHranu } from "./hranarx.actions";

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
    })),
    on(izmeniHranu,(state,props) => {
        let hranatmp = state.hrana.filter(h => h.uuid != props.uuid)
        hranatmp.push(props)
        return {...state,hrana:hranatmp,error:''}
    }),
    on(ukloniHranu,(state,props) => {
        let hranatmp = state.hrana.filter(h => h.uuid != props.uuid)
        return {...state,hrana:hranatmp,error:''}
    })
    )
