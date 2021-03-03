import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { Controller } from "./workspace/controller";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [AppComponent, Controller],
  bootstrap: [AppComponent],
})
export class AppModule {}
