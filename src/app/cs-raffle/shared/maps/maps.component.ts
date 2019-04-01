import { Component, OnInit, Input } from '@angular/core';
import { Map } from '../map.model';
import { MatCheckboxChange } from '@angular/material';
import { MapsStateService } from '../maps-state.service';

@Component({
  selector: 'bps-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  public newMapName: string;

  @Input()
  public maps: Map[];

  constructor(private mapsStateService: MapsStateService) {}

  public ngOnInit(): void {
    this.mapsStateService.maps = this.maps;
  }

  public onCheckedChange(evt: MatCheckboxChange, map: Map): void {
    map.isSelected = evt.checked;
  }

  public addMap(): void {
    this.maps.push({
      name: this.newMapName,
      isSelected: false
    } as Map);
  }
}
