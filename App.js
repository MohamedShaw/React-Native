import {Navigation} from 'react-native-navigation';
import AuthScreen from './component/screens/Auth/AuthRegister';
import FindPlaces from './component/screens/FindPlaces/FindPlaces';
import SharePlaces from './component/screens/SharedPlaces/SharePlaces';
// import FindEmp from './component/screens/FindEmp/FindEmp';
import PlaceDetail from './component/screens/PlaceDetail/PlaceDetail';
import SideDrawer from './component/screens/SideDrawer/SideDrawer';
import {Provider} from 'react-redux';
import configerStrore from './component/stroe/configurStore';
import {AsyncStorage} from 'react-native';
import startTabs from './component/screens/MainTabs/mainScreen';
import Profile from './component/screens/Profile/Profile';
// import findn from './component/screens/MainTabs/find'
import ReduxForm from './component/screens/ReduxForm/ReduxForm';
import Animations from './component/screens/Animation/Animation';
import MoreChatHeads from './component/screens/Animation/MoreChatHeads';

import DeepStream from './component/screens/DS/DeebStream';
const store = configerStrore();

//register screen 
Navigation.registerComponent('FindScreenPlace',
 ()=> FindPlaces, 
 store, 
 Provider);

 Navigation.registerComponent('Animate',
 ()=> Animations, 
 store, 
 Provider);
 Navigation.registerComponent('Animat',
 ()=> MoreChatHeads, 
 store, 
 Provider);
Navigation.registerComponent('ShareScreenPlace', 
  ()=> SharePlaces,
  store, 
  Provider);
Navigation.registerComponent('Profile',
()=> Profile,
store,
Provider)

Navigation.registerComponent('SideDrawer', ()=> SideDrawer);
Navigation.registerComponent('ReduxForm', ()=> ReduxForm, store, Provider);

  
Navigation.registerComponent('AuthScreenPlace', ()=> AuthScreen,  store, Provider);
////detail
Navigation.registerComponent('DetailScreen',()=>PlaceDetail,store,Provider );
Navigation.registerComponent('Ds', ()=> DeepStream);



/////it takes 2 args 1- is unique name 2-is screen name

//start App
// SingleScreen Navigation



const value = AsyncStorage.getItem('@MySuperStore:key').then(value =>{
  if (value == null ) {
    // startTabs();
    
    Navigation.startSingleScreenApp({
      screen : {
        screen : 'Animat',
        title : 'Wellcom To Login!',
        navigatorButtons:{
          leftButtons:{
            title:'menu',
            id: "sideDrawerToggle"
          }
        }
    
      },
      //  drawer : {
      //       left: {
      //           screen: "SideDrawer"
      //       },
      //       disableOpenGesture: true


      //   },
      //   appStyle : {
      //     tabBarSelectedButtonColor : "green"
      // }
    });
    
  }else{

    // alert(JSON.stringify(value))

   
      Navigation.startSingleScreenApp({
        screen : {
          screen : 'Animat',
          title : 'Ds',

          navigatorButtons:{
            leftButtons:{
              title:'menu',
              id: "sideDrawerToggle"
            }
          }
      
        },
        drawer : {
          left: {
              screen: "SideDrawer"
          }
  
      },
      appStyle : {
        tabBarSelectedButtonColor : "green"
    }

    })
   
    
 
  // startTabs();
  }
});

// alert(value)


// Navigation.startSingleScreenApp({
//   screen : {
//     screen : 'AuthScreenPlace',
//     title : 'Wellcom To Navigation',

//   }
// });






































// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import {connect} from 'react-redux'
// import {add_place, delet_place, select_place, deselect_place} from './component/stroe/actions/index'

// import PlaceInput from './component/PlaceInput/PlaceInput';
// import PlaceList from './component/PlaceList/PlaceList';
// import PlaceDetail from './component/PlaceDetail/PlaceDetail';

// class App extends Component {
  
//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   };

//   placeDeletedHandler = () => {
//     this.props.onDeletPlace();
//   };

//   modalClosedHandler = () => {
//     this.props.onDEselectPlace();
//   };

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetail
//           selectedPlace={this.props.selectedPlace}
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList
//           places={this.props.places}
//           onItemSelected={this.placeSelectedHandler}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start"
//   }
// });

// const mapSetToProps = state =>{
//   return{
//     places:state.places.places,
//     selectedPlace : state.places.selectedPlace
//   }

// }

// const mapSetToDispatch = dispatch =>{
//   return{

//     onAddPlace: (name)=>dispatch(add_place(name)),
//     onDeletPlace:()=>dispatch(delet_place()),
//     onSelectPlace:(key)=>dispatch(select_place(key)),
//     onDEselectPlace:()=>dispatch(deselect_place()),



//   }
// }

// export default connect(mapSetToProps, mapSetToDispatch) (App);





