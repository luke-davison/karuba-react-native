import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Cell } from '../classes/Cell';

import { Tile } from './Tile';

export class PlayerCell extends React.Component<{cell: Cell}> {
    render() {
        return (
            <View style={styles.playerCell}>
                {this.props.cell.tile && <Tile tile={this.props.cell.tile} />}
                {this.props.cell.adventurerId && (
                    <View style={styles.adventurer} />
                )}
                {this.props.cell.templeId && (
                    <View style={styles.temple} />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playerCell: {
        height: '100%',
        width: '100%'
    },
    adventurer: {

    },
    temple: {

    }
})