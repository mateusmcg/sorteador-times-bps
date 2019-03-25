import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class PlayersStateService {
  public players: Player[];

  constructor() {
    this.clearState();
  }

  public clearState(): void {
    this.players = [
      { id: Guid.create(), name: 'Bob', isSelected: false },
      { id: Guid.create(), name: 'Vuti', isSelected: false },
      { id: Guid.create(), name: 'Cerqueira', isSelected: false },
      { id: Guid.create(), name: 'Blindão', isSelected: false },
      { id: Guid.create(), name: 'Brunão', isSelected: false },
      { id: Guid.create(), name: 'Breno', isSelected: false },
      { id: Guid.create(), name: 'Beto', isSelected: false },
      { id: Guid.create(), name: 'Passos', isSelected: false },
      { id: Guid.create(), name: 'Zille', isSelected: false },
      { id: Guid.create(), name: 'Primo', isSelected: false },
      { id: Guid.create(), name: 'Recchi', isSelected: false }
    ];
  }
}
