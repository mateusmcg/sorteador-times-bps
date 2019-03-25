import { Injectable } from '@angular/core';
import { Match } from '../shared/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchStateService {
  public match: Match;
}
