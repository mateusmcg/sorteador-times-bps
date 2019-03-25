import { Injectable } from '@angular/core';
import { Player } from '../player.model';
import { GameMode } from '../game-mode.enum';
import { Validator } from './validator.model';
import { ValidatorMessages } from './validator-messages.enum';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  private validator = {} as Validator;

  constructor() {
    this.initValidator();
  }

  public validatePlayers(mode: GameMode, players: Player[]): Validator {
    this.initValidator();

    switch (mode) {
      case GameMode.x2:
        this.validateX2(players);
        break;
      case GameMode.x3:
        this.validateX3(players);
        break;
      case GameMode.GC:
        this.validateGC(players);
        break;
      default:
        return {
          isValid: false,
          errors: ['Modo de jogo inválido!']
        } as Validator;
    }

    return this.validator;
  }

  private initValidator() {
    this.validator.isValid = true;
    this.validator.errors = [];
  }

  private validateX2(players: Player[]): void {
    this.checkIsEven(players);
    this.selectAtLeastNPlayers(4, players);
  }

  private validateX3(players: Player[]): void {
    this.checkIsEven(players);
    this.selectAtLeastNPlayers(6, players);
  }

  private validateGC(players: Player[]): void {
    this.checkIsEven(players);
    this.selectAtLeastNPlayers(6, players);
  }

  private checkIsEven(players: Player[]): void {
    if (players.length % 2 !== 0) {
      this.validator.errors.push(ValidatorMessages.IS_NOT_EVEN);
      this.validator.isValid = false;
    }
  }

  private selectAtLeastNPlayers(minNumberOfPlayers: number, players: Player[]) {
    if (players.length < minNumberOfPlayers) {
      this.validator.errors.push(
        ValidatorMessages.MIN_NUMBER_OF_PLAYERS.replace(
          '{0}',
          minNumberOfPlayers.toString()
        )
      );
      this.validator.isValid = false;
    }
  }
}
