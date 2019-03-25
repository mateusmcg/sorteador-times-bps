import { Component, OnInit } from '@angular/core';
import { PlayersStateService } from '../shared/players-state.service';

@Component({
  selector: 'bps-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss']
})
export class SelectModeComponent implements OnInit {

  constructor(private playersStateService: PlayersStateService) { }

  ngOnInit() {
    this.playersStateService.clearState();
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

}
