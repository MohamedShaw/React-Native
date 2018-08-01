import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAIL, REFRESH_REQUEST, REFRESH_REQUEST_SUCCESS, REFRESH_REQUEST_FAIL } from './ActionType'
import Axios from 'axios'

export function getApi(page) {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_REQUEST });
        try {
            const response = await Axios
                .get(`https://randomuser.me/api/?page=${page}&results=10`)
            dispatch({ type: FETCH_REQUEST_SUCCESS, payload: response.data.results })

                .catch(error => {
                    dispatch({ type: FETCH_REQUEST_FAIL, payload: error })
                })

            console.log("Daata", response.data.results);
        } catch (error) {
            dispatch({ type: FETCH_REQUEST_FAIL, payload: error })
        }

    }

}

export function refresh() {
    return async (dispatch, getState) => {
        dispatch({ type: REFRESH_REQUEST });
        try {
            const response = await Axios
                .get(`https://randomuser.me/api/?page=1&results=8`)

            dispatch({ type: REFRESH_REQUEST_SUCCESS, payload: response.data.results })

                .catch(error => {
                    dispatch({ type: FETCH_REQUEST_FAIL, payload: error })
                })

            console.log("Daata", response.data.results);
        } catch (error) {
            dispatch({ type: REFRESH_REQUEST_FAIL, payload: error })
        }

    }

}

