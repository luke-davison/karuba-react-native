
import { Game } from './Game';
import { GameBuilder } from './GameBuilder';

export class AppState {
    game: Game;
    
    constructor() {
        const gameBuilder = new GameBuilder();
        this.game = gameBuilder.buildGame(4, 4);
    }
}