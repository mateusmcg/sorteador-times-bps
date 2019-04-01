import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectModeComponent } from './select-mode/select-mode.component';
import { X2Component } from './x2/x2.component';
import { X3Component } from './x3/x3.component';
import { GcComponent } from './gc/gc.component';
import { MatchComponent } from './match/match.component';
import { MapsPageComponent } from './maps-page/maps-page.component';

const routes: Routes = [
  {
    path: '',
    component: SelectModeComponent,
    data: { animation: 'select-mode' }
  },
  { path: 'x2', component: X2Component, data: { animation: 'x2' } },
  { path: 'x3', component: X3Component, data: { animation: 'x3' } },
  { path: 'gc', component: GcComponent, data: { animation: 'gc' } },
  { path: 'maps', component: MapsPageComponent, data: { animation: 'maps' } },
  { path: 'match', component: MatchComponent, data: { animation: 'match' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsRaffleRoutingModule {}
