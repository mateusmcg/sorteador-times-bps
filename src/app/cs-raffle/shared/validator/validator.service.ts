import { Injectable } from '@angular/core';
import { Player } from '../player.model';
import { GameMode } from '../game-mode.enum';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor() {}

  public validatePlayers(mode: GameMode, players: Player[]): boolean {
    switch (mode) {
      case GameMode.x2:
        return this.validateX2(players);
      case GameMode.x3:
        return this.validateX3(players);
      case GameMode.GC:
        return this.validateGC(players);
      default:
        return false;
    }
  }

  private validateX2(players: Player[]): boolean {
    return true;
  }

  private validateX3(players: Player[]): boolean {
    return true;
  }

  private validateGC(players: Player[]): boolean {
    return true;
  }
}
