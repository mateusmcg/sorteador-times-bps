import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';

@Component({
  selector: 'bps-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.scss']
})
export class GcComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public onSortPlayers(players: Player[]): void {
    console.debug('gc', players);
  }
}
