import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'bps-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
