import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule, provideState, provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { hranaReducer } from './hranarx/hranarx.reducer';
import { HranaEffects } from './hranarx/hranarx.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withRouterConfig({onSameUrlNavigation:'reload'})),provideHttpClient(),provideStore({hrana:hranaReducer}),provideEffects([HranaEffects]), provideAnimationsAsync()]
};
