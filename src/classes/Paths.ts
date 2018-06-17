export class Paths {
    north: boolean;
    east: boolean;
    south: boolean;
    west: boolean;
    count: number = 0;
    constructor(north: boolean, east: boolean, south: boolean, west: boolean) {
        this.north = north;
        this.east = east;
        this.west = west;
        this.south = south;
        if (north) {
            this.count++
        }
        if (east) {
            this.count++
        }
        if (south) {
            this.count++
        }
        if (west) {
            this.count++
        }
    }
}