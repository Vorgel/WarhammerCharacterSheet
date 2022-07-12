import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './components/pages/character/character.component';
import { EquipmentComponent } from './components/pages/equipment/equipment.component';
import { AdditionalComponent } from './components/pages/additional/additional.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { SpellsComponent } from './components/pages/spells/spells.component';

const routes: Routes = [
  { path: 'character', component: CharacterComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'equipment', component: EquipmentComponent},
  { path: 'spells', component: SpellsComponent},
  { path: 'additional', component: AdditionalComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CharacterComponent, SkillsComponent, EquipmentComponent, SpellsComponent, AdditionalComponent]