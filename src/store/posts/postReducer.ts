import {Reducer} from "react";
import {PostApi, PostRequestAction, PostRequestErrorAction, PostRequestSuccessAction} from "./postAction";

export type PostState = {
    error: string;
    data: PostApi[]
}

type PostActions = PostRequestAction | PostRequestSuccessAction | PostRequestErrorAction;
export const postReducer: Reducer<PostState, PostActions> = (state, action) => {
    switch (action.type) {
        case "POST_REQUEST":
            return {
                ...state
            };
        case "POST_REQUEST_SUCCESS":
            return {
                ...state,
                data: action.data
            }
        case "POST_REQUEST_ERROR":
            return {
                ...state,
                error: action.error
            }
        default:
            return state

    }
}