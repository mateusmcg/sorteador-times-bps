import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { ValidatorService } from '../shared/validator/validator.service';
import { GameMode } from '../shared/game-mode.enum';
import { SortService } from '../shared/sort/sort.service';
import { Router, NavigationExtras } from '@angular/router';
import { MatchStateService } from '../match/match-state.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'bps-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.scss']
})
export class GcComponent implements OnInit {
  constructor(
    private validator: ValidatorService,
    private sortService: SortService,
    private matchStateService: MatchStateService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  public onSortPlayers(players: Player[]): void {
    const validator = this.validator.validatePlayers(GameMode.GC, players);

    if (validator.isValid) {
      this.matchStateService.match = this.sortService.sortPlayers(
        GameMode.GC,
        players
      );
      this.router.navigate(['select-mode', 'match']);

      return;
    }

    this.snackBar.open(validator.errors.join('\n\n'), 'OK', { duration: 5000 });
  }
}
