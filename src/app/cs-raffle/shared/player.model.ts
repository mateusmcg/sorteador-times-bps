import { Guid } from 'guid-typescript';

export interface Player {
  id: Guid;
  name: string;
  isSelected: boolean;
}
