import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';

@Component({
  selector: 'bps-x3',
  templateUrl: './x3.component.html',
  styleUrls: ['./x3.component.scss']
})
export class X3Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  public onSortPlayers(players: Player[]): void {
    console.debug('x3', players);
  }
}
