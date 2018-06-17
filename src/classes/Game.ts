import { Player } from './Player';
import { Temple } from './Temple';
import { Tile } from './Tile';
import { Placement } from './Placement';
import { Position } from './Position';

export class Game {
    id: number;
    currentTile?: Tile;
    players: Player[];
    remainingTiles: Tile[];
    temples: Temple[];

    constructor(id: number, players: Player[], remainingTiles: Tile[], temples: Temple[]) {
        this.id = id;
        this.players = players;
        this.remainingTiles = remainingTiles;
        this.temples = temples;

        let tile = this.remainingTiles.pop()
        if (tile) {
            this.players[0].placements.push(new Placement(tile, new Position(1, 1)))
            
        }
        tile = this.remainingTiles.shift()
        if (tile) {
            this.players[0].placements.push(new Placement(tile, new Position(3, 1)))
            
        }
        tile = this.remainingTiles.pop();
        tile = this.remainingTiles.pop();
        tile = this.remainingTiles.pop();
        if (tile) {
            this.players[0].placements.push(new Placement(tile, new Position(2, 1)))
            
        }
        tile = this.remainingTiles.shift()
        tile = this.remainingTiles.shift()
        if (tile) {
            this.players[0].placements.push(new Placement(tile, new Position(3, 2)))
            
        }
        tile = this.remainingTiles.pop()
        if (tile) {
            this.players[0].placements.push(new Placement(tile, new Position(3, 3)))
            
        }
        tile = this.remainingTiles.shift();
        tile = this.remainingTiles.shift();
        tile = this.remainingTiles.shift();
        tile = this.remainingTiles.shift();
        tile = this.remainingTiles.shift();
        if (tile) {
            this.players[0].placements.push(new Placement(tile, new Position(4, 2)))
            
        }
        tile = this.remainingTiles.pop()
        if (tile) {
            this.players[0].placements.push(new Placement(tile, new Position(5, 5)))
            
        }

        this.players[0].buildGrid();

        this.currentTile = this.remainingTiles.pop();
    }
}