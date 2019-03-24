import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { Player } from '../player.model';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'bps-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  @Output()
  public onSortPlayers: EventEmitter<Player[]>;

  private selectedPlayers: Player[];

  public players: Player[];
  public newPlayerName: string;

  constructor() {
    this.onSortPlayers = new EventEmitter<Player[]>();
  }

  ngOnInit() {
    this.selectedPlayers = [];

    this.players = [
      { id: Guid.create(), name: 'Bob' },
      { id: Guid.create(), name: 'Vuti' },
      { id: Guid.create(), name: 'Cerqueira' },
      { id: Guid.create(), name: 'Blindão' },
      { id: Guid.create(), name: 'Brunão' },
      { id: Guid.create(), name: 'Breno' },
      { id: Guid.create(), name: 'Beto' },
      { id: Guid.create(), name: 'Passos' },
      { id: Guid.create(), name: 'Zille' },
      { id: Guid.create(), name: 'Primo' },
      { id: Guid.create(), name: 'Recchi' }
    ];
  }

  public onCheckedChange(evt: MatCheckboxChange, player: Player): void {
    if (evt.checked) {
      this.selectedPlayers.push(player);
      return;
    }

    const index = this.selectedPlayers.indexOf(player);
    this.selectedPlayers.splice(index, 1);
  }

  public addPlayer(): void {
    this.players.push({
      id: Guid.create(),
      name: this.newPlayerName
    } as Player);
  }

  public sortPlayers(): void {
    this.onSortPlayers.emit(this.selectedPlayers);
  }
}
