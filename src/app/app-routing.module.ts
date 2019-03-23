import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'select-mode', loadChildren: './cs-raffle/cs-raffle.module#CsRaffleModule'},
  { path: '', redirectTo: '/select-mode', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
