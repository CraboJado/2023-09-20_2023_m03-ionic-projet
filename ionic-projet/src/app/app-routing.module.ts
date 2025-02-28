import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakersComponent} from './speakers/speakers.component';
import { DetailSessionComponent } from './detail-session/detail-session.component';
import { DetailPresentatorComponent } from './detail-presentator/detail-presentator.component';
import { TelephoneComponent } from './telephone/telephone.component';

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
    path: 'speakers',
    component:SpeakersComponent
  },
  {
    path: 'speakers/:id',
    component:DetailPresentatorComponent
  },
  {
    path: 'phone',
    component:TelephoneComponent
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
