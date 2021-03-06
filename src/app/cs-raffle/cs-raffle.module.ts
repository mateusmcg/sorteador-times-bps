import { NgModule } from '@angular/core';

import { SelectModeComponent } from './select-mode/select-mode.component';
import { SharedModule } from '../shared/shared.module';
import { CsRaffleRoutingModule } from './cs-raffle-routing.module';
import { X2Component } from './x2/x2.component';
import { X3Component } from './x3/x3.component';
import { GcComponent } from './gc/gc.component';
import { GoBackComponent } from './shared/go-back/go-back.component';
import { PlayersComponent } from './shared/players/players.component';
import { MatchComponent } from './match/match.component';
import { MapsComponent } from './shared/maps/maps.component';
import { MapsPageComponent } from './maps-page/maps-page.component';

@NgModule({
  declarations: [
    SelectModeComponent,
    X2Component,
    X3Component,
    GcComponent,
    GoBackComponent,
    PlayersComponent,
    MatchComponent,
    MapsComponent,
    MapsPageComponent
  ],
  imports: [CsRaffleRoutingModule, SharedModule]
})
export class CsRaffleModule {}
