
import React, { Component } from 'react'
import { InputAccessoryViewProps, View, StyleSheet, Dimensions, Animated, ScrollView, TouchableOpacity, ListView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import { Button, Text, Icon } from "native-base";
import LottieView from 'lottie-react-native';
import anim from '../../assets/animations/done';
import error from '../../assets/animations/loc';
import Interactable from 'react-native-interactable'
const Screen = {
  // width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
};


class Animations extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8']),
    };
    this._deltaX = new Animated.Value(0);
  }

  // state = {
  //   done: false,
  //   err: false,
  //   dragEnabled: true,
  //   canScroll: false,
  //   collapse: false

  // }
  onCardPress() {
    alert('Card was pressed');
  }
  onButtonPress(type) {
    alert(`Button ${type} was pressed`);
  }
  onChangeLayoutPress() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  onAlert(event) {
    console.log('alert:', event.nativeEvent);
    if (JSON.stringify(event.nativeEvent).includes("\"blue\":\"enter\"")) {
      this.setState({ dragEnabled: false });
    }
    if (JSON.stringify(event.nativeEvent).includes("\"blue\":\"leave\"")) {
      this.setState({ dragEnabled: true });
    }
  }
  onDrag(event) {
    console.log('drag:', event.nativeEvent);
  }
  onSnap(event) {
    const { id } = event.nativeEvent;
    if (id === 'bottom') {
      this.setState({ canScroll: true });
      alert('This implementation is still broken, in progress');
    }
  }
  onScroll(event) {
    const { contentOffset } = event.nativeEvent;
    if (contentOffset.y === 0) {
      this.setState({ canScroll: false });
    }
  }
  renderRow(data) {
    return (
      <Interactable.View
        horizontalOnly={true}
        snapPoints={[{ x: 360 }, { x: 0 }, { x: -360 }]}>
        <TouchableOpacity style={styles.card} onPress={this.onCardPress}>
          <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this, 'A')}>
            <Text style={{ textAlign: 'center' }}>Button A</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this, 'B')}>
            <Text style={{ textAlign: 'center' }}>Button B</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Interactable.View>
    );
  }

  onDrawerSnap(event) {
    const snapPointId = event.nativeEvent.id;
    console.log(`drawer state is ${snapPointId}`);
  }
  render() {


    return (

      <View style={styles.container}>
        <View style={{ backgroundColor: 'blue' }}>

          <View style={{ position: 'absolute', right: 0, height: 75, flexDirection: 'row', alignItems: 'center' }}>

            <Animated.View style={
              [styles.button, {
                opacity: this._deltaX.interpolate({
                  inputRange: [-165, -165, -115, -115],
                  outputRange: [1, 1, 0, 0]
                }),
                transform: [{
                  scale: this._deltaX.interpolate({
                    inputRange: [-165, -165, -115, -115],
                    outputRange: [1, 1, 0.8, 0.8]
                  })
                }]
              }
              ]} >
              <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this, 'A')}>
                <Text style={{ textAlign: 'center' }}>Button A</Text>
              </TouchableOpacity>
            </Animated.View>
          
          </View>

          <Interactable.View
            horizontalOnly={true}
           
            snapPoints={[{ x: 0, id: 'closed' }, { x: -230, id: 'open' }]}
            onSnap={this.onDrawerSnap}
            animatedValueX={this._deltaX}>
            <View style={{ left: 0, right: 0, height: 75, backgroundColor: '#e0e0e0' }}
            >
            <Text>vc</Text>
            </View>
           
          </Interactable.View>

        </View>
        {/* // coolapse */}
        {/* <TouchableOpacity onPress={this.onChangeLayoutPress.bind(this)}>
          <View style={[styles.card, {
            justifyContent: 'center',
            backgroundColor: 'green',
            height: this.state.collapsed ? 80 : 180
          }]}>
            <Text style={styles.label}>Tap to {this.state.collapsed ? 'expand' : 'collapse'}</Text>
          </View>
        </TouchableOpacity>

        <Interactable.View
          horizontalOnly={true}
          snapPoints={[{ x: 230 }, { x: 0 }, { x: -230 }]}>
          <View style={styles.card} />
        </Interactable.View> */}
        {/* <View style={{ backgroundColor: 'red', height: 250, alignItems: 'center' }}>
          <Animated.View style={{
            transform: [
              {
                translateY: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [-58, -58, 0, 0]
                })
              },
              {
                scale: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [0.35, 0.35, 1, 1]
                })
              }
            ]
          }}>
            <View style={{ width: 150, height: 150, backgroundColor: 'blue', borderRadius: 75, marginTop: 50 }} />
          </Animated.View>
        </View>

        <Interactable.View
          verticalOnly={true}
          snapPoints={[{ y: 0 }, { y: -150, id: 'bottom' }]}
          boundaries={{ top: -150 }}
          onSnap={this.onSnap.bind(this)}
          animatedValueY={this._deltaY}>
          <ScrollView
            bounces={false}
            canCancelContentTouches={this.state.canScroll}
            onScroll={this.onScroll.bind(this)}
            style={{ left: 0, right: 0, height: Screen.height - 100, backgroundColor: '#e0e0e0' }}>
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
          </ScrollView>
        </Interactable.View> */}
        {/* <View style={styles.markerContainer}><View style={{ backgroundColor: '#00ff0030', position: 'absolute', left: Screen.width / 2 + 100, right: 0, top: 0, bottom: 0 }} /></View>
        <View style={styles.markerContainer}><View style={{ backgroundColor: '#ffff0060', position: 'absolute', left: Screen.width / 2 - 150, right: Screen.width / 2 + 50, top: Screen.height / 2 + 100, bottom: Screen.height / 2 - 200 }} /></View>
        <View style={styles.markerContainer}><View style={{ backgroundColor: '#add8e6', position: 'absolute', left: 0, right: Screen.width / 2 + 50, top: Screen.height / 2 - 150, bottom: Screen.height / 2 }}>
          <Text style={{ fontSize: 28 }}>
            Non Draggable Area
            </Text>
        </View>
        </View>
        <Interactable.View
          snapPoints={[{ x: -140, y: -250 }, { x: 140, y: -250 }, { x: -140, y: 250 }, { x: 140, y: 250 }]}
          dragEnabled={this.state.dragEnabled}
          alertAreas={[
            { id: 'green', influenceArea: { left: 100 } },
            { id: 'yellow', influenceArea: { top: 100, bottom: 200, left: -150, right: -50 } },
            { id: 'blue', influenceArea: { top: -150, bottom: 0, left: -Screen.width / 2, right: -50, } },
          ]}
          onAlert={this.onAlert.bind(this)}
          onDrag={this.onDrag.bind(this)}
          initialPosition={{ x: -140, y: -250 }}>
          <View style={{ width: 70, height: 70, backgroundColor: 'red', borderRadius: 35 }} />
        </Interactable.View> */}



        {/* <Interactable.View
          snapPoints={[
            {x: -140, y: -250},
            {x: 140, y: -250},
            {x: -140, y: -120},
            {x: 140, y: -120},
            {x: -140, y: 0},
            {x: 140, y: 0},
            {x: -140, y: 120},
            {x: 140, y: 120},
            {x: -140, y: 250},
            {x: 140, y: 250, tension: 50, damping: 0.9}
          ]}
          initialPosition={{x: -140, y: -250}}>
          <View style={{width: 70, height: 70, backgroundColor: '#009EDE', borderRadius: 35}} />
        </Interactable.View> */}
        {/* <Interactable.View
          horizontalOnly={true}
          snapPoints={[{ x: 0 }, { x: -200 }]}
          onSnap={this.onDrawerSnap}
          right={this.swipeoutBtns}>

          <Text>LInk</Text>
        </Interactable.View>
        <View style={{ flex: 1, backgroundColor: 'transparent', marginVertical: "20%" }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button
              style={{ backgroundColor: "#8E35A1" }}
              rounded
              info
              onPress={() => this.setState({
                done: false,
                err: true
              }, () => this.animation.play())}
            >
              <Text>Stop</Text>
              <Icon name="hand" style={{ marginRight: 10, fontSize: 20, color: "#fff" }} />
            </Button>
            <Button iconLeft rounded info onPress={() => this.setState({
              done: true,
              err: false
            }, () => this.animation.play())}>
              <Text>Play</Text>
              <Icon name="play" style={{ marginRight: 10, fontSize: 20, color: "#fff" }} />
            </Button>
          </View>

        </View>

        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>
            Sign in with Facebook
            </Text>
        </LinearGradient>
        {this.state.done &&
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',

            }}
            source={anim}
          />
        }
        {this.state.err && <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',

          }}
          loop={true}
          source={error}
        />
        }
        {this.state.err &&
          <Animatable.Text
            style={{

              position: 'absolute',
              left: 20,
              right: 20,
              bottom: 20,
              height: "10%",

              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
            }}
            iterationCount={5}
            direction="alternate"
            animation="slideInUp"
            duration={400}
            delay={500}
          >
            <Text> Animate Me </Text>
          </Animatable.Text>
        } */}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 10,
    margin: 20,
    flex: 1,

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  markerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  card: {
    width: 300,
    height: 180,
    backgroundColor: 'red',
    borderRadius: 8,
    marginVertical: 6
  },
  button1: {
    width: 80,
    height: 40,
    marginLeft: 30,
    marginTop: 30,
    justifyContent: 'center',
    backgroundColor: 'purple'
  },
  button: {
    width: 40,
    height: 40,
    marginRight: 25,
    backgroundColor: 'green'
  }
})
export default Animations;