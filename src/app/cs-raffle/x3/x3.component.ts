import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { ValidatorService } from '../shared/validator/validator.service';
import { GameMode } from '../shared/game-mode.enum';
import { SortService } from '../shared/sort/sort.service';
import { MatchStateService } from '../match/match-state.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MAPS, Map } from '../shared/map.model';
import { PlayersStateService } from '../shared/players-state.service';
import { MapsStateService } from '../shared/maps-state.service';

@Component({
  selector: 'bps-x3',
  templateUrl: './x3.component.html',
  styleUrls: ['./x3.component.scss']
})
export class X3Component implements OnInit {
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
    this.maps = [
      MAPS.DE_INFERNO,
      MAPS.DE_SHORTDUST,
      MAPS.FY_ICEWORLD,
      MAPS.FY_POOL_DAY,
      MAPS.AIM_PISTOL_CSGO,
      MAPS.AIM_MAP,
      MAPS.AWP_LEGO,
      MAPS.AWP_INDIA,
      MAPS.DE_OVERPASS,
      MAPS.GD_RIALTO
    ];
  }

  public generateMatch(): void {
    const selectedPlayers = this.playersStateService.players.filter(p => p.isSelected);
    const selectedMaps = this.mapsStateService.maps.filter(m => m.isSelected);

    const validator = this.validator.validatePlayers(GameMode.x3, selectedPlayers);

    if (validator.isValid) {
      this.matchStateService.match = this.sortService.sortPlayers(
        GameMode.x3,
        selectedPlayers
      );
      this.router.navigate(['select-mode', 'match']);

      return;
    }

    this.snackBar.open(validator.errors.join('\n\n'), 'OK', { duration: 5000 });
  }
}
