import axios from 'axios'

// action types
const CREATE_NEW_WALK_REQUEST = "CREATE_NEW_WALK_REQUEST"
const GET_WALKS = "GET_WALKS"
const UPDATE_WALK_WITH_WALKER = "UPDATE_WALK_WITH_WALKER"

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

const updateWalks = (walk) => {
    return {
        type: UPDATE_WALK_WITH_WALKER,
        walk
    }
}

// thunk creator 
export const createWalk = (walkObj) => async (dispatch) => {
    try {
        const walk = {startTime: walkObj.startTime , notes: walkObj.notes, email: walkObj.email}
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

  export const setWalkerOnWalk = (walkInfoObj) => async (dispatch) => {
    try {
        const walk = {email: walkInfoObj.email, dogId: walkInfoObj.dogId, startTime: walkInfoObj.startTime}
        const {data} = await axios.put('/api/acceptAWalk', walk)
        dispatch(updateWalks(data))
    } catch (err) {
        console.log(err)
    }
}
  

const initialState = []; 
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_WALKS:
            return action.walks
        case CREATE_NEW_WALK_REQUEST:
            return [...state, action.walk]
        case UPDATE_WALK_WITH_WALKER:
            return action.walk
        default:
            return state; 
    }
}