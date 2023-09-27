import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { PresentatorsComponent } from './presentators/presentators.component';
import { DetailSessionComponent } from './detail-session/detail-session.component';
import { DetailPresentatorComponent } from './detail-presentator/detail-presentator.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sessions',
    component:SessionsComponent
  },
  {
    path: 'sessions/:id',
    component:DetailSessionComponent
  },
  {
    path: 'presentators',
    component:PresentatorsComponent
  },
  {
    path: 'presentators/:id',
    component:DetailPresentatorComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
