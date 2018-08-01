import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, ActivityIndicator, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import {
    RecyclerListView,
    DataProvider,
    LayoutProvider,
} from 'recyclerlistview';
import Axios from 'axios'
import xx from '../../assets/xx.jpg'


class Cell extends Component {
    render() {
        return <View {...this.props}>{this.props.children}</View>;
    }
}



const ViewTypes = {
    LEFT: 1,
    RIGHT: 2
};
class RecyclerList extends Component {
    constructor(props) {
        super(props);

        this.width = Dimensions.get('window').width;

        this._layoutProvider = new LayoutProvider(
            index => {
                if (index % 2 === 0) {
                    return ViewTypes.LEFT;
                } else {
                    return ViewTypes.RIGHT;
                }
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.LEFT:
                        dim.width = Math.floor(this.width / 2) + 0.5;
                        dim.height = 100;
                        break;
                    case ViewTypes.RIGHT:
                        dim.width = Math.floor(this.width / 2) + 0.5;
                        dim.height = 100;
                        break;
                    // case 1:
                    //     dim.width = width;
                    //     dim.height = 100;
                    //     break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            },
        );
        this._rowRenderer = this._rowRenderer.bind(this);

        this.state = {
            dataProvider: new DataProvider(_ => false
            ).cloneWithRows([]),
            loading: false,
            refresh: false,
            error: null

        };
    }

    page = 1;
    componentDidMount() {

        this.getApi(1);
    }

    getApi = async (page) => {

        this.setState({
            loading: true
        })
        try {
            const res = await Axios
                .get(`https://randomuser.me/api/?page=${page}&results=10`)
                .catch(error => {
                    alert("somThingRomndfl")
                    this.setState({
                        dataProvider: new DataProvider(_ => false
                        ).cloneWithRows([]),
                        loading: false,
                        refresh: false,
                        error: null
                    })
                })

            console.log("Daata", res.data.results);

            const dataProvider = new DataProvider((r1, r2) => r1.email !== r2.email);

            this.setState({

                dataProvider: dataProvider.cloneWithRows(
                    [...this.state.dataProvider.getAllData(), ...res.data.results]
                ),
                loading: false,
                refresh: false,
                error: null
            })



        } catch (error) {
            console.log('fg', error)
        }
    }

    _rowRenderer(type, data) {
        // You can return any view here, CellContainer has no special significance
        const url = data.picture.thumbnail

        switch (type) {
            case ViewTypes.LEFT:
                return (
                    <Cell
                        style={styles.containerGridLeft}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Image
                                source={{ uri: data.picture.thumbnail }}
                                style={{ width: 50, height: 50, borderRadius: 25, marginTop:20 }}
                            />
                            <View style={{ flex: 1, marginLeft: 20, justifyContent: 'center', }}>
                                <Text>Email: {data.email}</Text>
                                <Text>Gender: {data.gender}</Text>
                                <Text>Name: {data.name.first}</Text>
                            </View>

                        </View>

                    </Cell>
                );
            case ViewTypes.RIGHT:
                return (
                    <Cell
                        style={styles.containerGridRight}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: "space-between",}}>
                            <Image
                                source={{ uri: data.picture.thumbnail }}
                                style={{ width: 50, height: 50, borderRadius: 25,  marginTop:20 }}
                            />
                            <View style={{ flex: 1, marginLeft: 20, justifyContent: 'center' }}>
                                <Text>Email: {data.email}</Text>
                                <Text>Gender: {data.gender}</Text>
                                <Text>Name: {data.name.first}</Text>
                            </View>


                        </View>


                    </Cell>
                );
            default:
                return null;
        }
    }
    renderFooterSpinner = () => {

        return (
            this.state.loading ?
                <ActivityIndicator
                    style={{ margin: 10 }}
                    size="large"
                    color='orange'
                />
                : <View style={{ height: 30 }} />
        )

    };
    refresh = async () => {
        this.setState({
            refresh: true
        })
        try {
            const res = await Axios
                .get(`https://randomuser.me/api/?page=1&results=8`)
                .catch(error => {
                    this.setState({
                        dataProvider: new DataProvider(_ => false
                        ).cloneWithRows([]),
                        loading: false,
                        refresh: false,
                        error: null
                    })
                })

            console.log("EEEEEEEEEE", res);

            const dataProvider = new DataProvider((r1, r2) => r1.email !== r2.email);

            this.setState({
                ...this.state,
                dataProvider: dataProvider.cloneWithRows(
                    res.data.results
                ),
                loading: false,
                refresh: false,
                error: null
            })



        } catch (error) {
            console.log('fg', error)
        }
    }
    onScroll = () => {
        this.page = 1;
        this.refresh()
    }

    render() {
        return (
            <RecyclerListView
                layoutProvider={this._layoutProvider}
                dataProvider={this.state.dataProvider}
                rowRenderer={this._rowRenderer}
                onEndReached={() => {
                    this.page++;
                    this.getApi(this.page)

                }}
                isHorizontal={false}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refresh}
                        onRefresh={this.refresh.bind(this)}
                        colors={['blue']}
                    />
                }

                onEndReachedThreshold={0.5}
                renderFooter={this.renderFooterSpinner.bind(this)}
            // onScroll={this.onScroll.bind(this)}
            />
        );
    }
}


const styles = StyleSheet.create({
    containerGridLeft: {

        // justifyContent: "space-around",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#fff',
        alignItems: "center",
        flex: 1,
        backgroundColor: "#6CA8AB"
    },
    containerGridRight: {

        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#fff',
        alignItems: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#185D8D"
    }
})
export default RecyclerList;
