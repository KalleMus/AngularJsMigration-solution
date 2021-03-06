import "@angular/compiler";
import "./polyfills";

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradeModule } from "@angular/upgrade/static";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { Contact } from "./services/contact.resource";
import { ContactService } from "./services/contact.service";

import { DefaultImagePipe } from "./pipes/default-image.pipe";

import { SearchComponent } from "./components/search.component";
import { CardComponent } from "./components/card.component";
import { SpinnerComponent } from "./components/spinner.component";
import { PersonListComponent } from "./components/person-list.component";
import { PersonCreateComponent } from "./components/person-create.component";
import { PersonEditComponent } from "./components/person-edit.component";
import { AppRootComponent } from "./components/app-root.component";

import { routes } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    ToastContainerModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    Contact,
    ContactService
  ],
  declarations: [
    SearchComponent,
    DefaultImagePipe,
    CardComponent,
    SpinnerComponent,
    PersonListComponent,
    PersonCreateComponent,
    PersonEditComponent,
    AppRootComponent
  ],
  bootstrap: [
    AppRootComponent
  ]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);