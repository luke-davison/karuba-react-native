import { Position } from './Position';

export class Temple {
    id: number;
    position: Position;

    constructor(id: number, position: Position) {
        this.id = id;
        this.position = position;
    }
}