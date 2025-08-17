import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrikazrobeComponent } from './prikazrobe/prikazrobe.component';
import { KorpaprikazComponent } from './korpaprikaz/korpaprikaz.component';
import { NarudzbineComponent } from './narudzbine/narudzbine.component';
import { NarudzbineprikazComponent } from './narudzbineprikaz/narudzbineprikaz.component';

export const routes: Routes = [{path:"login",component:LoginComponent},{path:"register",component:RegisterComponent},{path:"kupi",component:PrikazrobeComponent},{path:"korpa",component:KorpaprikazComponent},{path:"narudzbine",component:NarudzbineprikazComponent},{path:"",component:LoginComponent,pathMatch:'full'}];
