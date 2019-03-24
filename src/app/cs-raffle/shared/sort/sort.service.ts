import { Injectable } from '@angular/core';
import { Match } from '../match.model';
import { GameMode } from '../game-mode.enum';
import { Player } from '../player.model';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  constructor() {}

  public sortPlayers(mode: GameMode, players: Player[]): Match {
    switch (mode) {
      case GameMode.x2:
        return this.sortX2(players);
      case GameMode.x3:
        return this.sortX3(players);
      case GameMode.GC:
        return this.sortGC(players);
      default:
        return null;
    }
  }

  private sortX2(players: Player[]): Match {
    const ct = [] as Player[];
    const tr = [] as Player[];

    const shuffledList = _.shuffle(players);
    for (let i = 0; i < 2; i++) {
      ct.push(shuffledList.pop());
      tr.push(shuffledList.pop());
    }

    return { CT: ct, TR: tr } as Match;
  }

  private sortX3(players: Player[]): Match {
    const ct = [] as Player[];
    const tr = [] as Player[];

    const shuffledList = _.shuffle(players);
    for (let i = 0; i < 3; i++) {
      ct.push(shuffledList.pop());
      tr.push(shuffledList.pop());
    }

    return { CT: ct, TR: tr } as Match;
  }

  private sortGC(players: Player[]): Match {
    const ct = [] as Player[];
    const tr = [] as Player[];

    const shuffledList = _.shuffle(players);
    for (let i = 0; i < players.length / 2; i++) {
      ct.push(shuffledList.pop());
      tr.push(shuffledList.pop());
    }

    return { CT: ct, TR: tr } as Match;
  }
}
