import { createReducer, on } from "@ngrx/store";
import { Hrana } from "../hrana/hranaDTO";
import {createEntityAdapter, EntityAdapter, EntityState,Update} from "@ngrx/entity"
import { izmeniHranu, napraviHranu, ucitajHranu, ucitajHranuOK, ukloniHranu } from "./hranarx.actions";

export interface HranaState extends EntityState<Hrana>  {
    error:string
}


export const HranaAdapter : EntityAdapter<Hrana> = createEntityAdapter<Hrana>()

export const stanje:HranaState = HranaAdapter.getInitialState({error:''})


export const hranaReducer = createReducer(stanje,
    on(ucitajHranuOK, (novo,{hrana}) => (
        HranaAdapter.addMany(hrana,stanje)
    )),
    on(izmeniHranu,(novo,props) => {
        return HranaAdapter.upsertOne(props,stanje)
    }),
    on(ukloniHranu,(novo,props) => {
        return HranaAdapter.removeOne(props.uuid,stanje)
    }),
 
    )
