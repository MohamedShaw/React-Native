
import firebase from 'react-native-firebase';
// Initialize Firebase


//  const firebaseConfig = {
//   apiKey: "AIzaSyDhoXKIAp2FlFmucvZmpj3NItKenhRzhVw",
//   authDomain: "flattest-2ccf5.firebaseapp.com",
//   databaseURL: "https://flattest-2ccf5.firebaseio.com",
//   projectId: "flattest-2ccf5",
//   storageBucket: "",
//   messagingSenderId: "459698225572"
// }


class Fire {
  constructor() {
    this.init();
    this.observeAuth()
  }


  // 2.
  init = () =>
    firebase.initializeApp({
      apiKey: "AIzaSyDhoXKIAp2FlFmucvZmpj3NItKenhRzhVw",
      authDomain: "flattest-2ccf5.firebaseapp.com",
      databaseURL: "https://flattest-2ccf5.firebaseio.com",
      projectId: "flattest-2ccf5",
      storageBucket: "",
      messagingSenderId: "459698225572"
    });
  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  // 3.
  onAuthStateChanged = user => {
    if (!user) {
      try {
        // 4.
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };
  get ref() {
    return firebase.database().ref('messages');
  }

  // 2.
  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  // 3.
  parse = snapshot => {
  }

  // 4.
  off() {
    this.ref.off();
  }

  parse = snapshot => {

    // 1.
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
  
    // 2.
    const timestamp = new Date(numberStamp);
  
    // 3.
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
   return message;
  };
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  
  // 2.
  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  
  // 3.
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
  
      // 4.
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };
  
  // 5.
  append = message => this.ref.push(message);
}
// firebase.initializeApp(firebaseConfig);

export default firebase;