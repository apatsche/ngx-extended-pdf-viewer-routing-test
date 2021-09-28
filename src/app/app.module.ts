import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ViewerComponent } from "./viewer/viewer.component";

@NgModule({
  declarations: [AppComponent, ViewerComponent],
  //imports: [BrowserModule, AppRoutingModule],
  imports: [BrowserModule, AppRoutingModule, NgxExtendedPdfViewerModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
