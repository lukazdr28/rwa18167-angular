import { createAction,props } from "@ngrx/store";
import { Hrana } from "../hrana/hranaDTO";

export const napraviHranu = createAction('[Hrana] Napravi Hranu',
props<Hrana>())

export const ukloniHranu = createAction('[Hrana] Ukloni Hranu',
props<{uuid:string}>())

export const ucitajHranu = createAction('[Hrana] Ucitaj Hranu')

export const ucitajHranuOK = createAction('[Hrana] Ucitaj Hranu OK',
props<{hrana:Hrana[]}>())

export const ucitajHranuErr = createAction('[Hrana] Ucitaj Hranu Greska',
props<{error:string}>())