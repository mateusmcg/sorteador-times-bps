import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { Player } from '../player.model';
import { Guid } from 'guid-typescript';
import { MatchStateService } from '../../match/match-state.service';
import { PlayersStateService } from '../players-state.service';

@Component({
  selector: 'bps-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  public players: Player[];
  public newPlayerName: string;

  constructor(private playersStateService: PlayersStateService) {}

  public ngOnInit(): void {
    this.players = this.playersStateService.players;
  }

  public onCheckedChange(evt: MatCheckboxChange, player: Player): void {
    player.isSelected = evt.checked;
  }

  public addPlayer(): void {
    this.players.push({
      id: Guid.create(),
      name: this.newPlayerName,
      isSelected: false
    } as Player);
  }

}
