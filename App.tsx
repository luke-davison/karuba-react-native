import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { GameBuilder } from './src/classes/GameBuilder';

import { CurrentTile } from './src/components/CurrentTile';
import { PlayerGrid } from './src/components/PlayerGrid';

import { boardHeight, boardWidth, edgeWidthPercentage } from './src/constants';

const gameBuilder = new GameBuilder();
const game = gameBuilder.buildGame(4, 4);

export default class App extends React.Component<{}> {
  render() {
    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;
    const minDimension = deviceHeight > deviceWidth ? deviceWidth : deviceHeight;

    const borderWidth = minDimension * 0.1;
    const maxPlayerBoardHeight = deviceHeight - borderWidth * 2;
    const maxPlayerBoardWidth = deviceWidth - borderWidth * 2;

    const squareHeightBasedOnHeight = maxPlayerBoardHeight / (boardHeight + 2 * edgeWidthPercentage)
    const squareHeightBasedOnWidth = maxPlayerBoardWidth / (boardWidth + 2 * edgeWidthPercentage)

    const tileWidth = squareHeightBasedOnHeight > squareHeightBasedOnWidth ? squareHeightBasedOnWidth : squareHeightBasedOnHeight;

    const playerBoardHeight = tileWidth * (boardHeight + 2 * edgeWidthPercentage)
    const playerBoardWidth = tileWidth * (boardWidth + 2 * edgeWidthPercentage)

    const styles = StyleSheet.create({
      container: {
        height: '100%',
        width: '100%'
      },
      playerBoard: {
        margin: borderWidth,
        height: playerBoardHeight,
        width: playerBoardWidth
      },
      currentTile: {
        flexDirection: 'row',
        height: tileWidth,
        width: '100%'
      },
      currentTileText: {
        height: '100%',
        width: '50%'
      },
      currentTileTile: {
        height: '100%',
        width: tileWidth
      },
    });

    return (
      <View style={styles.container}>
        <View style={styles.playerBoard}>
          <PlayerGrid player={game.players[0]} tileWidth={tileWidth} />
        </View>
        <View style={styles.currentTile}>
          <View style={styles.currentTileText}>
            <Text>Current Tile</Text>
          </View>
          <View style={styles.currentTileTile}>
            {game.currentTile && <CurrentTile tile={game.currentTile} />}
          </View>
        </View>
      </View>
    );
  }
}


