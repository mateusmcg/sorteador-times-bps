import { Component, OnInit } from '@angular/core';
import { MatchStateService } from './match-state.service';
import { Match } from '../shared/match.model';
import { Router } from '@angular/router';

@Component({
  selector: 'bps-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  public match: Match;

  constructor(
    private matchStateService: MatchStateService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.matchStateService.match) {
      this.router.navigate(['', 'select-mode']);
    }

    this.match = this.matchStateService.match;
  }
}
