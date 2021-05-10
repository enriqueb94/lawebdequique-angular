import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';

import { PerfilComponent } from './perfil/perfil.component';
import { HeaderComponent } from './perfil/header/header.component';
import { AcercaComponent } from './perfil/acerca/acerca.component';
import { EducacionComponent } from './perfil/educacion/educacion.component';
import { SkillsComponent } from './perfil/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HeaderComponent,
    AcercaComponent,
    EducacionComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
