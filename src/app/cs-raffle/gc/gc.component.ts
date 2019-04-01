import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { ValidatorService } from '../shared/validator/validator.service';
import { GameMode } from '../shared/game-mode.enum';
import { SortService } from '../shared/sort/sort.service';
import { Router, NavigationExtras } from '@angular/router';
import { MatchStateService } from '../match/match-state.service';
import { MatSnackBar } from '@angular/material';
import { Map, MAPS } from '../shared/map.model';
import { PlayersStateService } from '../shared/players-state.service';
import { MapsStateService } from '../shared/maps-state.service';

@Component({
  selector: 'bps-gc',
  templateUrl: './gc.component.html',
  styleUrls: ['./gc.component.scss']
})
export class GcComponent implements OnInit {
  public maps: Map[];

  constructor(
    private validator: ValidatorService,
    private sortService: SortService,
    private matchStateService: MatchStateService,
    private playersStateService: PlayersStateService,
    private mapsStateService: MapsStateService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.maps = [MAPS.DE_DUST_2, MAPS.DE_CACHE, MAPS.DE_OVERPASS, MAPS.DE_NUKE, MAPS.DE_MIRAGE, MAPS.DE_TRAIN, MAPS.DE_INFERNO];
  }

  public generateMatch(): void {
    const selectedPlayers = this.playersStateService.players.filter(p => p.isSelected);
    const selectedMaps = this.mapsStateService.maps.filter(m => m.isSelected);

    const validator = this.validator.validatePlayers(GameMode.GC, selectedPlayers);

    if (validator.isValid) {
      this.matchStateService.match = this.sortService.sortPlayers(
        GameMode.GC,
        selectedPlayers
      );
      this.router.navigate(['select-mode', 'match']);

      return;
    }

    this.snackBar.open(validator.errors.join('\n\n'), 'OK', { duration: 5000 });
  }
}
