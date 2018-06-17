import { Adventurer } from './Adventurer';
import { Cell } from './Cell';
import { Placement } from './Placement';
import { Temple } from './Temple';

import { boardHeight, boardWidth } from '../constants';

export class Player {
    id: number;
    adventurers: Adventurer[];
    grid: Cell[][]
    placements: Placement[];
    temples: Temple[];

    constructor(id: number, adventurers: Adventurer[], temples: Temple[]) {
        this.id = id;
        this.adventurers = adventurers;
        this.placements = [];
        this.temples = temples;
        this.buildGrid = this.buildGrid.bind(this);
        this.buildGrid();

    }

    buildGrid() {
        const rows: Cell[][] = [];
        for (let y = 0; y <= boardHeight + 1; y++) {
            const row: Cell[] = [];
            for (let x = 0; x <= boardWidth + 1; x++) {
                const cell = new Cell();
                const adventurer = this.adventurers.find(adventurer => adventurer.position.x === x && adventurer.position.y === y);
                if (adventurer) {
                    cell.adventurerId = adventurer.id;
                }
                const placement = this.placements.find(placement => placement.position.x === x && placement.position.y === y)
                if (placement) {
                    cell.tile = placement.tile
                }
                const temple = this.temples.find(temple => temple.position.x === x && temple.position.y === y);
                if (temple) {
                    cell.templeId = temple.id
                }
                row.push(cell)
            }
            rows.push(row)
        }
        this.grid = rows;
    }
}