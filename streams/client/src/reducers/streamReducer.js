import {
    CREATE_STREAM, FETCH_STREAMS, DELETE_STREAM,
    EDIT_STREAM, FETCH_STREAM
} from '../actions/types';
import _ from 'lodash';

const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }; // action.payload.map(stream => { return { [stream.id]: stream }; });
        case FETCH_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

export default streamReducer;