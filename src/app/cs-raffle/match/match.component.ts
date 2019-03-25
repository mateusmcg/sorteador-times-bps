import { Component, OnInit } from '@angular/core';
import { MatchStateService } from './match-state.service';
import { Match } from '../shared/match.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'bps-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  public match: Match;

  constructor(
    private matchStateService: MatchStateService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.matchStateService.match) {
      this.router.navigate(['', 'select-mode']);

      return;
    }

    this.match = this.matchStateService.match;
  }

  public copyToClipboard(): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.formatTextToCopy();
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.snackBar.open('Copied!', 'OK', { duration: 2000 });
  }

  private formatTextToCopy(): string {
    const ctPlayers = this.matchStateService.match.CT.map(p => p.name).join(
      ' | '
    );
    const trPlayers = this.matchStateService.match.TR.map(p => p.name).join(
      ' | '
    );
    return `CT => ${ctPlayers}\nTR => ${trPlayers}`;
  }
}
