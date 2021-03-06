import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { DynamicQuestionComponent } from './components/dynamic-question/dynamic-question.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DynamicFormComponent,
    FormGroupComponent,
    DynamicQuestionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
