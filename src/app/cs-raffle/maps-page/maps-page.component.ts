import { Component, OnInit } from '@angular/core';
import { Map, MAPS } from '../shared/map.model';
import { MapsStateService } from '../shared/maps-state.service';

@Component({
  selector: 'bps-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.scss']
})
export class MapsPageComponent implements OnInit {
  public maps: Map[];

  constructor(private mapsStateService: MapsStateService) {}

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
      MAPS.GD_RIALTO,
      MAPS.DE_DUST_2,
      MAPS.DE_CACHE,
      MAPS.DE_NUKE,
      MAPS.DE_MIRAGE,
      MAPS.DE_TRAIN,
    ];
  }

  public sortMaps(): void {
    const selectedMaps = this.mapsStateService.maps.filter(m => m.isSelected);
    console.debug('', selectedMaps);
  }
}
