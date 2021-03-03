import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Controller } from "./workspace/controller";

const routes: Routes = [
  {
    path: '',
    component: Controller
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
