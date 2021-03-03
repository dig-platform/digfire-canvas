import { Component, OnInit } from "@angular/core";
import {HeroModel} from './model';

@Component({
  selector: "app-workspace",
  templateUrl: "./view.html",
  styleUrls: ["./theme.scss"]
})
export class Controller implements OnInit {
  public title = 'DigFire Code Canvas';
  public hero = this.heroModel.hero;

  constructor(readonly heroModel: HeroModel) {}

  ngOnInit() {
  }
}
