import * as types from '../actions/ActionType'
import {
    RecyclerListView,
    DataProvider,
    LayoutProvider,
} from 'recyclerlistview';

const initialState = {
    dataProvider: new DataProvider(_ => false
    ).cloneWithRows([]),
    loading: false,
    refresh: false,
    error: null
};

const RandromReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.FETCH_REQUEST:

            return { ...state, error: null, loading: true, refresh :false };

        case types.FETCH_REQUEST_SUCCESS:

            return {
                ...state,
                dataProvider: new DataProvider((r1, r2) => r1.email !== r2.email).cloneWithRows(
                    [...state.dataProvider.getAllData(), ...action.payload]
                ),
                loading: false,
                refresh:false
            };

        case types.FETCH_REQUEST_FAIL:
            return { ...state, loading: false,refresh:false, error: action.payload };

        case types.REFRESH_REQUEST:

            return { ...state, error: null, loading: false, refresh: true };

        case types.REFRESH_REQUEST_SUCCESS:
            const dataProvider = new DataProvider((r1, r2) => r1.email !== r2.email);

            return {
                ...state,
                dataProvider: dataProvider.cloneWithRows(
                    action.payload
                ),
                loading: false,
                refresh: false
            };

        case types.REFRESH_REQUEST_FAIL:
            return { ...state, loading: false, error: action.payload, refresh: false };

        default:
            return state;
    }
};

export default RandromReducer;