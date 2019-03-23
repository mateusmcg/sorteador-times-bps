import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectModeComponent } from './select-mode/select-mode.component';

const routes: Routes = [
  { path: 'mode', component: SelectModeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
