import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { DropdownComponent } from './components/navbar/dropdown/dropdown.component';
import { PsychologyEffectsComponent } from './components/pages/character/psychology-effects/psychology-effects.component';
import { PsychologyEffectComponent } from './components/pages/character/psychology-effects/psychology-effect/psychology-effect.component';
import { AddPsychologyEffectComponent } from './components/pages/character/psychology-effects/add-psychology-effect/add-psychology-effect.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './components/main/main.component';
import { AppearanceComponent } from './components/pages/character/appearance/appearance.component';
import { PointsComponent } from './components/pages/character/points/points.component';
import { ExperienceComponent } from './components/pages/character/experience/experience.component';
import { VitalityComponent } from './components/pages/character/vitality/vitality.component';
import { GeneralComponent } from './components/pages/character/general/general.component';
import { SkillsTableComponent } from './components/pages/skills/skills-table/skills-table.component';
import { CharacteristicsTableComponent } from './components/pages/skills/characteristics-table/characteristics-table.component';
import { TalentsTableComponent } from './components/pages/skills/talents-table/talents-table.component';
import { SpellsTableComponent } from './components/pages/spells/spells-table/spells-table.component';
import { IncantationsTableComponent } from './components/pages/spells/incantations-table/incantations-table.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    routingComponents,
    DropdownComponent,
    PsychologyEffectComponent,
    AddPsychologyEffectComponent,
    MainComponent,
    AppearanceComponent,
    PointsComponent,
    ExperienceComponent,
    PsychologyEffectsComponent,
    VitalityComponent,
    GeneralComponent,
    SkillsTableComponent,
    CharacteristicsTableComponent,
    TalentsTableComponent,
    SpellsTableComponent,
    IncantationsTableComponent,
    SidenavComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
