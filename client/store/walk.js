import axios from 'axios'

// action types
const CREATE_NEW_WALK_REQUEST = "CREATE_NEW_WALK_REQUEST"
const GET_WALKS = "GET_WALKS"

// action creator 
const newWalkRequest = (walk) => {
    return {
        type: CREATE_NEW_WALK_REQUEST,
        walk
    }
}

const getWalks = (walks) => {
    return {
        type: GET_WALKS,
        walks
    }
}

// thunk creator 
export const createWalk = (walkObj) => async (dispatch) => {
    try {
        const walk = {startTime: walkObj.startTime , notes: walkObj.notes}
        console.log(walk, "inside thunk")
        const {data : created } = await axios.post('/api/requestAWalk', walk)
        dispatch(newWalkRequest(created))
    } catch (err) {
        console.log(err)
    }
}

export const getAvailableWalks = () => async (dispatch) => {
    const { data } = await axios.get('/api/acceptAWalk');
    dispatch(getWalks(data));
  };

const initialState = []; 
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_WALKS:
            return action.walks
        case CREATE_NEW_WALK_REQUEST:
            return [...state, action.walk]
        default:
            return state; 
    }
}