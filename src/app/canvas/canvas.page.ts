import { Component, OnInit } from '@angular/core';
import {DigFire} from '@dig-platform/dig-fire';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.page.html',
  styleUrls: ['./canvas.page.scss'],
})
export class CanvasPage implements OnInit {

  constructor(readonly digFire: DigFire) { }

  ngOnInit() {
  }

}
