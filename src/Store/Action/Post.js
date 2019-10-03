import PostUtils from "../../utils/PostUtils";
import { FETCH_POST_PAGINATION } from "./Type";

export const fetchCoursesFromDB = () => {
    return (dispatch) => {
        PostUtils.fetchPostPagination()
            .then(res => {
                dispatch(actFetchPostPagination(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const actFetchPostPagination = data => {
    return {
        type: FETCH_POST_PAGINATION,
        payload: data
    }
}