import { NgtCoreModule } from '@angular-three/core';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
} from '@angular-three/core/lights';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { NgtGridHelperModule } from '@angular-three/core/helpers';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CubeModule } from './cube/cube.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CubeModule,
    NgtCoreModule,
    NgtSpotLightModule,
    NgtAmbientLightModule,
    NgtSobaOrbitControlsModule,
    NgtGridHelperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
