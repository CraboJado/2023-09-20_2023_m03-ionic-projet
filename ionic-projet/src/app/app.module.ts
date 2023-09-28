import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailSessionComponent } from './detail-session/detail-session.component';
import { DetailPresentatorComponent } from './detail-presentator/detail-presentator.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    DetailSessionComponent,
    SpeakersComponent,
    DetailPresentatorComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
