import { createReducer, on } from "@ngrx/store";
import { Hrana } from "../hrana/hranaDTO";
import {createEntityAdapter, EntityAdapter, EntityState,Update} from "@ngrx/entity"
import { izmeniHranu, napraviHranu, ucitajHranu, ucitajHranuOK, ukloniHranu } from "./hranarx.actions";

export interface HranaState extends EntityState<Hrana>  {
    error:string
}


export const HranaAdapter : EntityAdapter<Hrana> = createEntityAdapter<Hrana>({selectId: (e) => <string>e.uuid})

export const pocetno:HranaState = HranaAdapter.getInitialState({error:''})


export const hranaReducer = createReducer(pocetno,
    on(ucitajHranuOK, (novo,{hrana}) => (
        HranaAdapter.addMany(hrana,novo)
    )),
    on(izmeniHranu,(novo,props) => {
        return HranaAdapter.upsertOne(props,novo)
    }),
    on(ukloniHranu,(novo,props) => {
        return HranaAdapter.removeOne(props.uuid,novo)
    }),
 
    )
