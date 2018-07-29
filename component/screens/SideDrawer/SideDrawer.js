import React, { Component } from "react";
import {
  View,
  // Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  AsyncStorage,
  Modal
} from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
import { Button, Text, Icon, Header, Body, Title,Toast, Container } from "native-base";


class SideDrawer extends Component {
  constructor(props){
    super(props);
  }
  state={

    isLogout: false

  }

  logout = ()=>{
    this.setState({ isLogout: true })

  
    // this.props.navigator.resetTo({
    //   screen: 'AuthScreenPlace', 
    //   title:'Wellcom To Login!'

    // });
    // this.props.navigator.pop();
  }
  onModal = () => {
    AsyncStorage.removeItem('@MySuperStore:key').then((value) => {

        this.props.navigator.resetTo({
            screen: 'AuthScreenPlace',
        })
        this.setState({ isLogout: false })
    })
}


onModalClose = () => {
  
  
  // Toast.show({
  //   text:'fffffffffffffffff'
  // })
  alert('Stay Login');

  this.setState({ isLogout: false })
}
  render() {

    if (this.state.isLogout) {
      return (
          <Modal
              visible={this.state.isLogout !== false}
              animationType="slide"
              onRequestClose={this.onModalClose}
          >
              <View style={styles.container} >
                  <View style={{ height: '20%', backgroundColor: 'steelblue' }}>
                      <Header hasTabs >
                          <Body style={{alignItems:'center'}}>
                              <Title>Are you sure to log out</Title>
                          </Body>
                      </Header>
                      {/* <Text style={styles.textContainerModal} >  Are you sure to log out</Text> */}

                  </View>
                  <View style={{ flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                      <View style={{ margin: 20 }}>
                          <Button
                              style={{ backgroundColor: "#8E35A1" }}
                              rounded
                              info
                              onPress={this.onModal}
                          >
                              <Text>Logout</Text>
                              <Icon name="md-log-out" style={{marginRight:10, fontSize: 20, color: "#fff" }} />
                          </Button>
                      </View>
                      <View>
                          <Button iconLeft rounded info onPress={this.onModalClose}>
                              <Text>Close</Text>
                              <Icon name="md-close" style={{marginRight:10, fontSize: 20, color: "#fff" }} />
                          </Button>
                      </View>
                  </View>
              </View>

          </Modal>
      );

  }

    return (
      <View
        style={[
          styles.container,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <TouchableOpacity onPress = {this.logout}>
          <View style={styles.drawerItem}>
            <Icon
              name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
              size={30}
              color="#aaa"
              style={styles.drawerItemIcon}
            />
            <Text style = {{color: '#eee'}}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "steelblue",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft:10,
    padding: 10,
    
    backgroundColor: "steelblue"
  },
  drawerItemIcon: {
    marginRight: 10,
    color: '#eee'
  }
});

export default SideDrawer;
