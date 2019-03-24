import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';

@Component({
  selector: 'bps-x2',
  templateUrl: './x2.component.html',
  styleUrls: ['./x2.component.scss']
})
export class X2Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  public onSortPlayers(players: Player[]): void {
    console.debug('x2', players);
  }
}
