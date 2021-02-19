import { Component, OnInit } from "@angular/core";
import {HeroModel} from './model';

@Component({
  selector: "app-canvas",
  templateUrl: "./view.html",
  styleUrls: ["./theme.scss"]
})
export class Controller implements OnInit {
  title = 'DigFire Code Canvas';

  constructor(readonly heroModel: HeroModel) {}

  ngOnInit() {
  }
}
