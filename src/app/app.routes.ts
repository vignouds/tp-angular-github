import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {PATH_HOME, PATH_DETAIL} from "./constantes.routes";


export const ROUTES: Routes = [
{ path: PATH_HOME, component: HomeComponent },
{ path: PATH_DETAIL + '/:pseudo', component: DetailComponent }
];
