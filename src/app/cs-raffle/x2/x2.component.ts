import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { ValidatorService } from '../shared/validator/validator.service';
import { GameMode } from '../shared/game-mode.enum';
import { SortService } from '../shared/sort/sort.service';
import { MatchStateService } from '../match/match-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bps-x2',
  templateUrl: './x2.component.html',
  styleUrls: ['./x2.component.scss']
})
export class X2Component implements OnInit {
  constructor(
    private validator: ValidatorService,
    private sortService: SortService,
    private matchStateService: MatchStateService,
    private router: Router
  ) {}

  ngOnInit() {}

  public onSortPlayers(players: Player[]): void {
    if (this.validator.validatePlayers(GameMode.x2, players)) {
      this.matchStateService.match = this.sortService.sortPlayers(
        GameMode.x2,
        players
      );
      this.router.navigate(['select-mode', 'match']);
    }
  }
}
