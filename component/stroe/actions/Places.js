
import { SET_PLACES, REMOVE_PLACE, SET_USERS, SET_SELECTED_ID } from './ActionType';
///// start fom here 
import firebase from '../../firebase/configT.js';
import thunk from 'redux-thunk';
import Fire from "../../firebase/config.js"


export const add_place = (placeName, email, gender, selected, image) => {
    return dispatch => {

        const placeData = {
            name: placeName,
            // location: location
            image: image
        };


        firebase.database().ref('/places/').push({
            name: placeName,
            email: email,
            gender: gender,
            selected: selected
            // image:image.base64
        });

    };

};
export const addUser = (user) => {
    return dispatch => {

        console.log("LOG USER IN ", user);



        firebase.database().ref('/user/').push({
            user
            // image:image.base64
        });        // firebase.database().ref('/users/').push({


    };

};



export const getPlaces = () => {
    return dispatch => {



        firebase.database().ref(`/places`).on('value', snap => {

            let parsedRes = snap.val();

            // console.log(snap);
            //   alert(JSON.stringify(snap));


            const places = [];
            for (let key in parsedRes) {
                places.push({
                    ...parsedRes[key],
                    image: {
                        uri: parsedRes[key].image
                    },
                    key: key
                });

            };



            dispatch(setPlaces(places));

        })


    }

};

export const getUsers = () => {
    console.log("ENRE HERE ");

    return dispatch => {
        console.log("FFDSFS");

        fetch('https://flattest-2ccf5.firebaseio.com/users.json')
            .catch(err => {
                alert("Something went wrong, sorry :/");
                console.log(err);
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log("PARSED", parsedRes);

                const places = [];
                for (let key in parsedRes) {
                    places.push({
                        ...parsedRes[key].user,
                        key: key
                    });
                }
                dispatch(setUsers(places));
            });




    }
}

export const setPlaces = places => {
    return {
        type: SET_PLACES,
        places: places
    };
};

export const setUsers = users => {
    console.log("USERSSSSS", users);

    return {
        type: SET_USERS,
        users: users
    };
};
export function setselectedId(selectedId) {

    return (dispatch, getState) => {
        dispatch({ type: SET_SELECTED_ID, payload: selectedId });
    };
}
// export const delet_place = (key) => {
//     return {
//         type: DELET_PLACE,
//         placeKey: key

//     };

// }; 

//endpoint that i make a request to it 
///https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=[API_KEY]

export const deletePlace = (key) => {
    return dispatch => {
        dispatch(removePlace(key));
        // fetch("https://awesome-places-1511248766522.firebaseio.com/places/" + key + ".json", {
        //     method: "DELETE"
        // })
        //     .catch(err => {
        //         alert("Something went wrong, sorry :/");
        //         console.log(err);
        //     })
        //     .then(res => res.json())
        //     .then(parsedRes => {
        //         console.log("Done!");
        //     });
        firebase.database().ref('/places/').child(key).remove();

    };
};

export const removePlace = key => {
    return {
        type: REMOVE_PLACE,
        key: key
    };
};

 // fetch('https://us-central1-exalted-booster-204014.cloudfunctions.net/imageStore', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         image: image.base64
        //     })

        // })
        //     .catch(err => {
        //         alert('somthing wrong')
        //         console.log('nnnnnnna'+err)})
        //     .then(res => res.json())
        //     .then(paredRes => {
        //         console.log(paredRes)

        //     });