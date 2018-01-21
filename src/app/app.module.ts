import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
