import { Component, OnInit } from '@angular/core';
import { PlayersStateService } from '../shared/players-state.service';
import { MapsStateService } from '../shared/maps-state.service';

@Component({
  selector: 'bps-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss']
})
export class SelectModeComponent implements OnInit {

  constructor(private playersStateService: PlayersStateService, private mapsStateService: MapsStateService) { }

  ngOnInit() {
    this.playersStateService.clearState();
    this.mapsStateService.clearState();
  }

  mode2x2(): void {
    console.log('2x2');
  }

  mode3x3(): void {
    console.log('3x3');
  }

  modeGC(): void{
    console.log('gc');
  }

  modeMaps(): void{
    console.log('maps');
  }

}
