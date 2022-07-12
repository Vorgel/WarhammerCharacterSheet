import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DropdownComponent } from './components/navbar/dropdown/dropdown.component';
import { PsychologyEffectComponent } from './components/pages/character/psychology-effect/psychology-effect.component';
import { AddPsychologyEffectComponent } from './components/pages/character/add-psychology-effect/add-psychology-effect.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    routingComponents,
    SidebarComponent,
    DropdownComponent,
    PsychologyEffectComponent,
    AddPsychologyEffectComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
