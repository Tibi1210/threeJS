import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeComponent } from './cube.component';
import { NgtCoreModule } from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import { NgtMeshBasicMaterialModule, NgtMeshStandardMaterialModule } from '@angular-three/core/materials';



@NgModule({
  declarations: [
    CubeComponent
  ],
  imports: [
    CommonModule,
    NgtCoreModule,
    NgtMeshModule,
    NgtBoxGeometryModule,
    NgtMeshBasicMaterialModule,
    NgtMeshStandardMaterialModule
  ],
  exports:[
    CubeComponent
  ]
})
export class CubeModule { }
