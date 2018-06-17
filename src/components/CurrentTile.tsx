import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Cell } from '../classes/Cell';
import { Tile as TileClass } from '../classes/Tile';

import { Tile } from './Tile';

export class CurrentTile extends React.Component<{tile: TileClass}> {
    render() {
        return (
            <View style={styles.playerCell}>
                <Tile tile={this.props.tile} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playerCell: {
        height: '100%',
        width: '100%'
    }
})