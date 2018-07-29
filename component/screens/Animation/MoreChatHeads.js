import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, Button, Image, Switch, Picker, Slider, WebView, Platform, Animated, TouchableHighlight } from 'react-native';
import Interactable from 'react-native-interactable';
import icon from '../../assets/tinder-photo.jpg';
import Icon from 'react-native-vector-icons'

const Screen = Dimensions.get('window');

export default class MoreChatHeads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      damping: 1-0.7,
      tension: 300
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Row damping={this.state.damping} tension={this.state.tension}>
          <View style={styles.rowContent}>
            <View style={styles.rowIcon} />
            <View>
              <Text style={styles.rowTitle}>Row Title</Text>
              <Text style={styles.rowSubtitle}>Drag the row left and right</Text>
            </View>
          </View>
        </Row>
        <Row damping={this.state.damping} tension={this.state.tension}>
          <View style={styles.rowContent}>
            <View style={styles.rowIcon} />
            <View>
              <Text style={styles.rowTitle}>Another Row</Text>
              <Text style={styles.rowSubtitle}>You can drag this row too</Text>
            </View>
          </View>
        </Row>
        <Row damping={this.state.damping} tension={this.state.tension}>
          <View style={styles.rowContent}>
            <View style={styles.rowIcon} />
            <View>
              <Text style={styles.rowTitle}>And A Third</Text>
              <Text style={styles.rowSubtitle}>This row can also be swiped</Text>
            </View>
          </View>
        </Row>

        <View style={styles.playground}>
          <Text style={styles.playgroundLabel}>Change spring damping:</Text>
          <Slider
            key='damping'
            style={styles.slider}
            value={this.state.damping}
            minimumValue={0.1}
            maximumValue={0.6}
            minimumTrackTintColor={'#007AFF'}
            maximumTrackTintColor={'white'}
            thumbTintColor={'white'}
            onSlidingComplete={(value) => this.setState({damping: value})}
          />
          <Text style={styles.playgroundLabel}>Change spring tension:</Text>
          <Slider
            key='tension'
            style={styles.slider}
            value={this.state.tension}
            minimumValue={0.0}
            maximumValue={1000.0}
            minimumTrackTintColor={'#007AFF'}
            maximumTrackTintColor={'white'}
            thumbTintColor={'white'}
            onSlidingComplete={(value) => this.setState({tension: value})}
          />
        </View>

      </View>
    );
  }
}

class Row extends Component {
  constructor(props) {
    super(props);
    this._deltaX = new Animated.Value(0);
  }
  render() {
    return (
      <View style={{backgroundColor: '#ceced2'}}>

        <View style={{position: 'absolute', left: 0, right: 0, height: 75}} pointerEvents='box-none'>
          <Animated.View style={
            [styles.trashHolder, {
              transform: [{
                translateX: this._deltaX.interpolate({
                  inputRange: [-155, 0],
                  outputRange: [0, 155]
                })
              }]
            }
          ]}>
            <TouchableOpacity onPress={this.onButtonPress.bind(this, 'trash')} style={styles.button}>
              <Image style={styles.button} source={icon} />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={
            [styles.snoozeHolder, {
              transform: [{
                translateX: this._deltaX.interpolate({
                  inputRange: [-155, 0],
                  outputRange: [0, 78]
                })
              }]
            }
            ]}>
            <TouchableOpacity onPress={this.onButtonPress.bind(this, 'snooze')} style={styles.button}>
              <Image style={styles.button} source={icon} />
            </TouchableOpacity>
          </Animated.View>
        </View>

        <View style={{position: 'absolute', left: 0, right: 0, height: 75}} pointerEvents='box-none'>

          <Animated.View style={
            [styles.doneHolder, {
              transform: [{
                translateX: this._deltaX.interpolate({
                  inputRange: [0, 78],
                  outputRange: [-78, 0]
                })
              }]
            }
            ]}>
            <TouchableOpacity onPress={this.onButtonPress.bind(this, 'done')} style={styles.button}>
              <Image style={styles.button} source={icon} />
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Interactable.View
          horizontalOnly={true}
          snapPoints={[
            {x: 78, damping: 1-this.props.damping, tension: this.props.tension},
            {x: 0, damping: 1-this.props.damping, tension: this.props.tension},
            {x: -155, damping: 1-this.props.damping, tension: this.props.tension}
          ]}
          animatedValueX={this._deltaX}>
          <View style={{left: 0, right: 0, height: 75, backgroundColor: 'white'}}>
            {this.props.children}
          </View>
        </Interactable.View>

      </View>
    );
  }
  onButtonPress(name) {
    alert(`Button ${name} pressed`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eeeeee'
  },
  rowIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    margin: 20
  },
  rowTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  rowSubtitle: {
    fontSize: 18,
    color: 'gray'
  },
  button: {
    width: 40,
    height: 40
  },
  trashHolder: {
    position: 'absolute',
    top: 0,
    left: Screen.width - 155,
    width: Screen.width,
    height: 75,
    paddingLeft: 18,
    backgroundColor: '#f8a024',
    justifyContent: 'center'
  },
  snoozeHolder: {
    position: 'absolute',
    top: 0,
    left: Screen.width - 78,
    width: Screen.width,
    height: 75,
    paddingLeft: 18,
    backgroundColor: '#4f7db0',
    justifyContent: 'center'
  },
  doneHolder: {
    position: 'absolute',
    top: 0,
    right: Screen.width - 78,
    width: Screen.width,
    height: 75,
    paddingRight: 18,
    backgroundColor: '#2f9a5d',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  playground: {
    marginTop: Screen.height <= 500 ? 0 : 80,
    padding: 20,
    width: Screen.width - 40,
    backgroundColor: '#5894f3',
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  playgroundLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15
  },
  slider: {
    height: 40
  }
});

//   constructor(props) {
//     super(props);
//     this.state = {
//       damping: 1-0.6,
//       tension: 300
//     };
//   }
//   render() {
//     return (
//       <View style={styles.container}>

//         <Row damping={this.state.damping} tension={this.state.tension}>
//           <View style={styles.rowContent}>
//             <View style={styles.rowIcon} />
//             <View>
//               <Text style={styles.rowTitle}>Row Title</Text>
//               <Text style={styles.rowSubtitle}>Drag the row left and right</Text>
//             </View>
//           </View>
//         </Row>
//         <Row damping={this.state.damping} tension={this.state.tension}>
//           <View style={styles.rowContent}>
//             <View style={styles.rowIcon} />
//             <View>
//               <Text style={styles.rowTitle}>Another Row</Text>
//               <Text style={styles.rowSubtitle}>You can drag this row too</Text>
//             </View>
//           </View>
//         </Row>
//         <Row damping={this.state.damping} tension={this.state.tension}>
//           <View style={styles.rowContent}>
//             <View style={styles.rowIcon} />
//             <View>
//               <Text style={styles.rowTitle}>And A Third</Text>
//               <Text style={styles.rowSubtitle}>This row can also be swiped</Text>
//             </View>
//           </View>
//         </Row>

//         <View style={styles.playground}>
//           <Text style={styles.playgroundLabel}>Change spring damping:</Text>
//           <Slider
//             key='damping'
//             style={styles.slider}
//             value={this.state.damping}
//             minimumValue={0.1}
//             maximumValue={0.6}
//             minimumTrackTintColor={'#007AFF'}
//             maximumTrackTintColor={'white'}
//             thumbTintColor={'white'}
//             onSlidingComplete={(value) => this.setState({damping: value})}
//           />
//           <Text style={styles.playgroundLabel}>Change spring tension:</Text>
//           <Slider
//             key='tension'
//             style={styles.slider}
//             value={this.state.tension}
//             minimumValue={0.0}
//             maximumValue={1000.0}
//             minimumTrackTintColor={'#007AFF'}
//             maximumTrackTintColor={'white'}
//             thumbTintColor={'white'}
//             onSlidingComplete={(value) => this.setState({tension: value},()=>{alert(value)})}
//           />
//         </View>

//       </View>
//     );
//   }
// }

// class Row extends Component {
//   constructor(props) {
//     super(props);
//     this._deltaX = new Animated.Value(0);
//     this.state = {isMoving: false, position: 1};
//   }
//   render() {
//     const activeOpacity = this.state.position !== 1 ? 0.5 : 1;
//     return (
//       <View style={{backgroundColor: '#de6d77'}}>

//         <View style={{position: 'absolute', right: 0, height: 75, alignItems: 'center'}}>
//           <TouchableOpacity style={[styles.button]} onPress={this.onButtonPress.bind(this, 'trash')}>
//             <Animated.Image source={icon} style={
//               [styles.buttonImage, {
//                 opacity: this._deltaX.interpolate({
//                   inputRange: [-150, -115],
//                   outputRange: [1, 0],
//                   extrapolateLeft: 'clamp',
//                   extrapolateRight: 'clamp'
//                 }),
//                 transform: [{
//                   scale: this._deltaX.interpolate({
//                     inputRange: [-150, -115],
//                     outputRange: [1, 0.7],
//                     extrapolateLeft: 'clamp',
//                     extrapolateRight: 'clamp'
//                   })
//                 }]
//               }
//             ]} />
//           </TouchableOpacity>
      
//         </View>

//         {/* <View style={{position: 'absolute', left: 0, height: 75, flexDirection: 'row', alignItems: 'center'}}>
//           <TouchableOpacity style={[styles.button]} onPress={this.onButtonPress.bind(this, 'done')}>
//             <Animated.Image source={icon} style={
//               [styles.buttonImage, {
//                 opacity: this._deltaX.interpolate({
//                   inputRange: [50, 75],
//                   outputRange: [0, 1],
//                   extrapolateLeft: 'clamp',
//                   extrapolateRight: 'clamp'
//                 }),
//                 transform: [{
//                   scale: this._deltaX.interpolate({
//                     inputRange: [50, 75],
//                     outputRange: [0.7, 1],
//                     extrapolateLeft: 'clamp',
//                     extrapolateRight: 'clamp'
//                   })
//                 }]
//               }
//             ]} />
//           </TouchableOpacity>
//         </View> */}

//         <Interactable.View
//           ref={el => this.interactableElem = el}
//           horizontalOnly={true}
//           snapPoints={[
//             {x: 75, damping: 1-this.props.damping, tension: this.props.tension},
//             {x: 0, damping: 1-this.props.damping, tension: this.props.tension},
//             {x: -150, damping: 1-this.props.damping, tension: this.props.tension}
//           ]}
//           onSnap={this.onSnap.bind(this)}
//           onDrag={this.onDrag.bind(this)}
//           onStop={this.onStopMoving.bind(this)}
//           dragToss={0.01}
//           animatedValueX={this._deltaX}>
//           <TouchableHighlight onPress={this.onRowPress.bind(this)} activeOpacity={activeOpacity} underlayColor={'#dddddd'}>
//             <View style={{left: 0, right: 0, height: 75, backgroundColor: 'white'}}>
//               {this.props.children}
//             </View>
//           </TouchableHighlight>
//         </Interactable.View>

//       </View>
//     );
//   }
//   onSnap({nativeEvent}) {
//     const { index } = nativeEvent;
//     this.setState({position: index});
//   }
//   onRowPress() {
//     const { isMoving, position } = this.state;
//     if (!isMoving && position !== 1) {
//       this.interactableElem.snapTo({index: 1});
//     }
//   }
//   onDrag({nativeEvent}) {
//     const { state } = nativeEvent;
//     if (state === 'start') {
//       this.setState({isMoving: true});
//     }
//   }
//   onStopMoving() {
//     this.setState({isMoving: false});
//   }
//   onButtonPress(name) {
//     alert(`Button ${name} pressed`);
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   rowContent: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: '#eeeeee'
//   },
//   rowIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#73d4e3',
//     margin: 20
//   },
//   rowTitle: {
//     fontWeight: 'bold',
//     fontSize: 20
//   },
//   rowSubtitle: {
//     fontSize: 18,
//     color: 'gray'
//   },
//   button: {
//     width: 75,
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   buttonImage: {
//     width: 40,
//     height: 40
//   },
//   playground: {
//     marginTop: Screen.height <= 500 ? 0 : 80,
//     padding: 20,
//     width: Screen.width - 40,
//     backgroundColor: '#5894f3',
//     alignItems: 'stretch',
//     alignSelf: 'center'
//   },
//   playgroundLabel: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 15
//   },
//   slider: {
//     height: 40
//   }
// });
//   render() {
//     return (
//       <View style={styles.container}>

//         <View>
//           <Text style={styles.contentTitle}>Content Title</Text>
//           <Image style={styles.contentImage} source={icon} />
//           <Text style={styles.contentBody}>This is the content body</Text>
//         </View>

//         <View style={styles.panelContainer}>
//           <Interactable.View
//             verticalOnly={true}
//             snapPoints={[{ y: 0, tension: 0, damping: 1 }, { y: -Screen.height + 80 }]}
//             gravityPoints={[{ y: 0, strength: 220, falloff: Screen.height * 8, damping: 0.7, influenceArea: { top: (-Screen.height + 80) * 0.5 } }]}
//             initialPosition={{ y: -Screen.height + 80 }}
//             boundaries={{ top: -Screen.height, bottom: 0, bounce: 2, haptics: true }}>
//             <View style={styles.panel}>
//               <Text style={styles.panelHeader}>Today</Text>
//               <Notification title='First Notification' body='This is the body of the first notification' />
//               <Notification title='Second Notification' body='This is the body of the 2nd notification' />
//               <Notification title='Third Notification' body='This is the body of the 3rd notification' />
//               {Screen.height <= 500 - 75 ? false :
//                 <View>
//                   <Text style={styles.panelHeader}>Yesterday</Text>
//                   <Notification title='Fourth Notification' body='This is the body of the 4th notification' />
//                 </View>
//               }
//               <View style={(Platform.OS === 'android') ? styles.panelFooterAndroid : styles.panelFooterIos}>
//                 <Text style={styles.panelFooterText}>4 NOTIFICATIONS</Text>
//                 <View style={styles.panelHandle} />

//               </View>
//             </View>
//           </Interactable.View>
//         </View>

//       </View>
//     );
//   }
// }

// class Notification extends Component {
//   render() {
//     return (
//       <View style={styles.notificationContainer}>
//         <View style={styles.notificationHeader}>
//           <Text style={styles.notificationTitle}>{this.props.title}</Text>
//         </View>
//         <Text style={styles.notificationBody}>{this.props.body}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#efefef',
//   },
//   panelContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0
//   },
//   panel: {
//     height: Screen.height + 2,
//     backgroundColor: '#182e43f0',
//     padding: 15,
//     paddingTop: 30,
//     flexDirection: 'column'
//   },
//   contentTitle: {
//     fontSize: 20,
//     marginBottom: 10
//   },
//   contentImage: {
//     width: Screen.width - 50,
//     height: Screen.width - 50
//   },
//   contentBody: {
//     fontSize: 18,
//     color: 'gray',
//     marginTop: 10
//   },
//   panelHeader: {
//     fontSize: 24,
//     color: 'white',
//     marginTop: 15,
//     marginBottom: 10,
//     marginLeft: 10,
//     justifyContent: 'flex-start'
//   },
//   panelFooterIos: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end'
//   },
//   panelFooterAndroid: {
//     flex: 1,
//     paddingTop: 15,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   panelFooterText: {
//     fontSize: 13,
//     color: '#ffffff80',
//     marginBottom: 10
//   },
//   panelHandle: {
//     width: 40,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#ffffff80'
//   },
//   notificationContainer: {
//     backgroundColor: '#b0cbdd',
//     borderRadius: 14,
//     marginBottom: 10
//   },
//   notificationHeader: {
//     height: 30,
//     backgroundColor: '#c3d6e1',
//     borderTopLeftRadius: 14,
//     borderTopRightRadius: 14,
//     paddingHorizontal: 20
//   },
//   notificationTitle: {
//     marginTop: 5,
//     fontSize: 16,
//     color: '#1c5675'
//   },
//   notificationBody: {
//     marginVertical: 14,
//     marginHorizontal: 20
//   }
// });[]
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       snapToIndex: 0
  //     };
  //   }
  //   render() {
  //     return (
  //       <View style={styles.container}>
  //         <Interactable.View
  //           ref='headInstance'
  //           snapPoints={[
  //             {x: -140, y: -250},
  //             {x: 140, y: -250},
  //             {x: -140, y: -120},
  //             {x: 140, y: -120},
  //             {x: -140, y: 0},
  //             {x: 140, y: 0},
  //             {x: -140, y: 120},
  //             {x: 140, y: 120},
  //             {x: -140, y: 250},
  //             {x: 140, y: 250}
  //           ]}
  //           initialPosition={{x: 140, y: 250}}>
  //           <View style={{width: 70, height: 70, backgroundColor: 'red', borderRadius: 35}} />
  //         </Interactable.View>
  //         <View style={styles.button}>
  //           <Button title="Snap To Next" onPress={this.onButtonPress.bind(this)} />
  //         </View>
  //       </View>
  //     );
  //   }
  //   onButtonPress() {
  //     this.refs['headInstance'].snapTo({index: this.state.snapToIndex});
  //     this.setState({
  //       snapToIndex: (this.state.snapToIndex + 1)%10
  //     });
  //   }
  // }

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'white',
  //   },
  //   button: {
  //     position: 'absolute',
  //     left: 110,
  //     backgroundColor: 'yellow'
  //   }
  // });
//   constructor(props) {
//     super(props);
//     this.state = {
//       vertical: true,
//       dragEnabled: true,
//       language: 'java',
//       switch: true
//     };
//   }
//   render() {
//     return (
//       <View style={styles.container}>

//         <View style={styles.direction}>
//           <Text style={{ marginRight: 10 }}>Vertical: </Text>
//           <Switch
//             value={this.state.vertical}
//             onValueChange={(value) => this.setState({ vertical: value })} />
//           <Text style={{ marginRight: 10, marginLeft: 20 }}>Can drag: </Text>
//           <Switch
//             value={this.state.dragEnabled}
//             onValueChange={(value) => this.setState({ dragEnabled: value })} />
//         </View>

//         <Interactable.View
//           verticalOnly={this.state.vertical}
//           horizontalOnly={!this.state.vertical}
//           dragEnabled={this.state.dragEnabled}
//           snapPoints={[{ y: 0 }]}
//           style={{ width: 300, height: 500, padding: 20, borderRadius: 10 }}>


//           <Button title='Button' onPress={() => { alert('Button pressed') }} />

//           <Picker
//             style={{ backgroundColor: '#ff000020' }}
//             selectedValue={this.state.language}
//             onValueChange={(lang) => this.setState({ language: lang })}>
//             <Picker.Item label="Objective-C" value="objc" />
//             <Picker.Item label="Java" value="java" />
//             <Picker.Item label="JavaScript" value="js" />
//           </Picker>

//           <Slider style={{ marginVertical: 10 }} />

//           <Switch
//             style={{ alignSelf: 'center' }}
//             value={this.state.switch}
//             onValueChange={(value) => this.setState({ switch: value })} />

//           <WebView
//             source={{ uri: 'https://static.wixstatic.com/media/e758eb_729674838e084f49bc75db035ed286a6~mv2.jpg/v1/fill/w_733,h_489,al_c,q_80,usm_0.66_1.00_0.01/e758eb_729674838e084f49bc75db035ed286a6~mv2.jpg' }}
//             style={{ width: 300, height: 100 }} />



//         </Interactable.View>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   direction: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20
//   }
// });