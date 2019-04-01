import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule, MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule, MatSnackBarModule, MatDividerModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,

    // Angular Material
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class SharedModule { }
