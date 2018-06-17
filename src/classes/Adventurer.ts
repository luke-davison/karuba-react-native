import { Position } from './Position';

export class Adventurer {
    id: number;
    gems: Array<number>;
    reward: number;
    position: Position;

    constructor(id: number, position: Position) {
        this.id = id;
        this.gems = [];
        this.reward = 0;
        this.position = position;
    }
}