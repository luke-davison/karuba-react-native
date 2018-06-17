import { Position } from './Position';
import { Tile } from './Tile';

export class Placement {
    position: Position;
    tile: Tile;

    constructor(tile: Tile, position: Position) {
        this.position = position;
        this.tile = tile;
    }
}