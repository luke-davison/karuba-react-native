import { GameBuilder } from './GameBuilder';

it('doesn\'t crash', () => {
  const gameBuilder = new GameBuilder();
  const newGame = gameBuilder.buildGame(4, 4);
  console.log(JSON.stringify(newGame))
  expect(newGame).toBeTruthy();
});
