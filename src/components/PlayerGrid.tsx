import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { Cell } from '../classes/Cell';
import { Player } from '../classes/Player'
import { Temple } from '../classes/Temple'

import { PlayerCell } from './PlayerCell';

import { edgeWidthPercentage } from '../constants';

export class PlayerGrid extends React.Component<{player: Player, tileWidth: number}> {
    render() {
        const styles = StyleSheet.create({
            playerGrid: {
                height: '100%',
                width: '100%'
            }
        })
        return (
            <View style={styles.playerGrid}>
                {this.props.player.grid.map((row: Cell[], rowKey: number) => {
                    let rowHeight = this.props.tileWidth;
                    if (rowKey === 0 || rowKey === this.props.player.grid.length - 1) {
                        rowHeight = this.props.tileWidth * edgeWidthPercentage;
                    }
                    return (
                        <View style={{flexDirection: 'row', height: rowHeight, width: '100%'}} key={rowKey}>
                            {row.map((cell: Cell, cellKey: number) => {
                                let cellWidth = this.props.tileWidth;
                                if (cellKey === 0 || cellKey === row.length - 1) {
                                    cellWidth = this.props.tileWidth * edgeWidthPercentage;
                                }
                                return (
                                    <View key={cellKey} style={{borderWidth: 0.5, borderColor: 'black', height: '100%', width: cellWidth}}>
                                        <PlayerCell cell={cell} />
                                    </View>
                                )
                            })}
                        </View>
                    )
                })}
            </View>
        );
    }
}
