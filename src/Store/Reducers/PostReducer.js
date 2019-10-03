import { FETCH_POST_PAGINATION } from "../Action/Type";

let initialState = {
    post: []
}

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_PAGINATION: {
            return {...state, post: action.payload}
        }

        default:
            return state;
    }
}

export default PostReducer;
