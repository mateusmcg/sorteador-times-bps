import { Injectable } from '@angular/core';
import { Map, MAPS } from './map.model';

@Injectable({
  providedIn: 'root'
})
export class MapsStateService {
  public maps: Map[];

  public clearState(): void {
    this.maps = [];
    Object.keys(MAPS).forEach(key => {
      MAPS[key].isSelected = false;
    });
  }
}
