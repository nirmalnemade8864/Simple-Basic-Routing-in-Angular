import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoComponent } from './demo/demo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    DemoComponent,

    InfoComponent,

    UserComponent,

    UserdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
