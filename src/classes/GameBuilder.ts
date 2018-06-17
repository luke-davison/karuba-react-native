import { Adventurer } from './Adventurer';
import { Game } from './Game';
import { Player } from './Player';
import { Position } from './Position';
import { Temple } from './Temple';
import { Tile } from './Tile';

import { boardHeight, boardWidth, minAdventurerTempleDistance } from '../constants'
import { tiles } from '../tiles';

export class GameBuilder {
    id: number = 0;
    adventurers: Adventurer[];
    players: Player[];
    remainingTiles: Tile[];
    temples: Temple[];

    constructor() {
        this.buildGame = this.buildGame.bind(this);

        this.reset()
    }

    reset() {
        this.adventurers = [];
        this.players = [];
        this.remainingTiles = [];
        this.temples = [];
    }

    buildGame(numberOfPlayers: number, numberOfAdventurers: number): Game {
        this.reset();
        for (let id = 1; id <= numberOfAdventurers; id++) {
            this.createAdventurerAndTemple(id)
        }
        for (let id = 1; id <= numberOfPlayers; id++) {
            this.createPlayer(id)
        }
        this.remainingTiles = tiles;
        return new Game(++this.id, this.players, this.remainingTiles, this.temples)
    }

    createAdventurersAndTemples(numberOfAdventurers: number) {
        for (let id = 1; id <= numberOfAdventurers; id++) {
            this.createAdventurerAndTemple(id)
        }
    }

    createAdventurerAndTemple(id: number): any {
        const adventurerRandomNumber: number = Math.floor(Math.random() * (boardWidth + boardHeight) + 1)
        const adventurerX = adventurerRandomNumber > boardHeight ? adventurerRandomNumber - boardHeight : 0;
        const adventurerY = adventurerRandomNumber > boardHeight ? boardHeight + 1 : adventurerRandomNumber;
        const adventurerPosition: Position = new Position(adventurerX, adventurerY);

        const templeRandomNumber: number = Math.floor(Math.random() * (boardWidth + boardHeight) + 1)
        const templeX = templeRandomNumber > boardWidth ? boardWidth + 1 : templeRandomNumber;
        const templeY = templeRandomNumber > boardWidth ? templeRandomNumber - boardWidth : 0;
        const templePosition: Position = new Position(templeX, templeY);

        if (
            this.tooCloseTooEachOther(adventurerRandomNumber, templeRandomNumber)
            || this.adventurerInSamePosition(adventurerPosition)
            || this.templeInSamePosition(adventurerPosition)
        ) {
            this.createAdventurerAndTemple(id);
        } else {
            this.adventurers.push(new Adventurer(id, adventurerPosition));
            this.temples.push(new Temple(id, templePosition));
        }
    }

    adventurerInSamePosition(position: Position): boolean {
        return !!this.adventurers.find(adventurer => {
            return adventurer.position.x === position.x && adventurer.position.y === position.y;
        })
    }

    templeInSamePosition(position: Position): boolean {
        return !!this.temples.find(temple => {
            return temple.position.x === position.x && temple.position.y === position.y;
        })
    }

    tooCloseTooEachOther(andventurerRandomNumber: number, templeRandomNumber: number) {
        return andventurerRandomNumber + templeRandomNumber < minAdventurerTempleDistance
            || andventurerRandomNumber + templeRandomNumber > (boardWidth + boardHeight) * 2 - minAdventurerTempleDistance + 1;
    }

    createPlayer(id: number) {
        const adventurers: Adventurer[] = this.adventurers.map(adventurer => {
            return new Adventurer(adventurer.id, new Position(adventurer.position.x, adventurer.position.y))
        })
        const temples: Adventurer[] = this.temples.map(temple => {
            return new Adventurer(temple.id, new Position(temple.position.x, temple.position.y))
        })
        this.players.push(new Player(id, adventurers, temples))
    }
}