import { NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
})
export class CubeComponent implements OnInit {
  
  @Input() position?: NgtVector3;

  constructor() {}

  ngOnInit(): void {}

  hover = false;
  active = false;

  onAnimate(mesh: THREE.Object3D) {
    mesh.rotation.x = mesh.rotation.y += 0.01;
  }
}
