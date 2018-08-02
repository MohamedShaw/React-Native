// import React, { Component } from 'react';
// import {View, Text} from 'react-native'
// import PropTypes from 'prop-types';
// var { FBLogin, FBLoginManager } = require('react-native-facebook-login');

// class Login extends Component {
//     componentDidMount(){
//         console.log("ahlen")
//     }
//     state = {
//         user : null
//     }
//   render() {
//     var _this = this;
//     return (
//       <FBLogin style={{ marginBottom: 10, flex:1 }}
//         ref={(fbLogin) => { this.fbLogin = fbLogin }}
//         permissions={["email","user_friends"]}
//         loginBehavior={FBLoginManager.LoginBehaviors.Native}

//         onLogin={function(data){
//           console.log("Logged in!");
//           console.log('data',data);
//           _this.setState({ user : data.credentials });
//         }}
//         onLogout={function(){
//           console.log("Logged out.");
//           _this.setState({ user : null });
//         }}
//         onLoginFound={function(data){
//           console.log("Existing login found.");
//           console.log(data);
//           _this.setState({ user : data.credentials });
//         }}
//         onLoginNotFound={function(){
//           console.log("No user logged in.");
//           _this.setState({ user : null });
//         }}
//         onError={function(data){
//           console.log("ERROR");
//           console.log(data);
//         }}
//         onCancel={function(){
//           console.log("User cancelled.");
//         }}
//         onPermissionsMissing={function(data){
//           console.log("Check permissions!");
//           console.log(data);
//         }}
//       >
//       </FBLogin>
//     );
//   }
// };

// export default Login;