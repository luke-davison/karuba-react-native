import { Adventurer } from './Adventurer';
import { Tile } from './Tile';
import { Temple } from './Temple';

export class Cell {
    adventurerId?: number;
    tile?: Tile;
    templeId?: number;
}