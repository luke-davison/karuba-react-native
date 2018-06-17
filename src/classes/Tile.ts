import { Paths } from './Paths';

export class Tile {
    id: number;
    gem?: number;
    paths: Paths;
    
    constructor(id: number, north: boolean, east: boolean, south: boolean, west: boolean, gem: number) {
        this.id = id;
        this.paths = new Paths(north, east, south, west);
        this.gem = gem;
    }
}