import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Tile as TileClass } from '../classes/Tile';

export class Tile extends React.Component<{tile: TileClass}> {
    render() {
        return (
            <View style={styles.tile}>
                <View style={styles.row}>
                    <View style={styles.jungle} />
                    {this.props.tile.paths.north && <View style={styles.path}/>}
                    {!this.props.tile.paths.north && <View style={styles.jungle}/>}
                    <View style={styles.jungle} />
                </View>
                <View style={styles.row}>
                    {this.props.tile.paths.east && <View style={styles.path}/>}
                    {!this.props.tile.paths.east && <View style={styles.jungle}/>}
                    <View style={styles.path} />
                    {this.props.tile.paths.west && <View style={styles.path}/>}
                    {!this.props.tile.paths.west && <View style={styles.jungle}/>}
                </View>
                <View style={styles.row}>
                    <View style={styles.jungle} />
                    {this.props.tile.paths.south && <View style={styles.path}/>}
                    {!this.props.tile.paths.south && <View style={styles.jungle}/>}
                    <View style={styles.jungle} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tile: {
        height: '100%',
        width: '100%'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        height: '33%',
        width: '100%'
    },
    jungle: {
        backgroundColor: 'green',
        height: '100%',
        width: '33%',
    },
    path: {
        backgroundColor: 'tan',
        height: '100%',
        width: '33%'
    }
})