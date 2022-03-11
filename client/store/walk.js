import axios from 'axios'

// action types
const CREATE_NEW_WALK_REQUEST = "CREATE_NEW_WALK_REQUEST"

// action creator 
const newWalkRequest = (walk) => {
    return {
        type: CREATE_NEW_WALK_REQUEST,
        walk
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
const initialState = []; 
export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_WALK_REQUEST:
            return [...state, action.walk]
        default:
            return state; 
    }
}