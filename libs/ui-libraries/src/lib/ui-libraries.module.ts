import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@items/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildcardComponent } from './wildcard/wildcard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ToolbarComponent,
    WildcardComponent
  ]
})
export class UiLibrariesModule {}
