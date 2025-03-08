import { Injectable, inject } from "@angular/core";
import {Actions,createEffect,ofType} from "@ngrx/effects"
import {napraviHranu,ucitajHranu,ucitajHranuErr,ucitajHranuOK,ukloniHranu,} from "./hranarx.actions"
import { HranaService } from "../hrana.service";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class HranaEffects {
    constructor(
    private actions$:Actions,
    private store:Store<AppState>,
    private hranaService:HranaService
    ) {}

ucitajHranu$ = createEffect((actions$ = inject(Actions)) =>
actions$.pipe(
ofType(ucitajHranu),
switchMap(() => from(this.hranaService.preuzmiHranu()).pipe(
    
    map((hrana: any) => ucitajHranuOK({hrana:hrana}))
    ,catchError((error) => of(ucitajHranuErr({error})))
    
    ))))
} 
