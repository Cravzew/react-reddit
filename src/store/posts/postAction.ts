import {Action, ActionCreator, AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {act} from "react-dom/test-utils";
import {useEffect} from "react";
import axios from "axios";

export interface PostApi {
    id?: string,
    author?: string,
    thumbnail?: string,
    title?: string,
    created?: number,
    score?: number,
    num_comments?: number,
    sr_detail?: { header_img?: null | string };
}

export const POST_REQUEST = 'POST_REQUEST'
export type PostRequestAction = {
    type: typeof POST_REQUEST
}
export const PostRequest: ActionCreator<PostRequestAction> = () => ({
    type: POST_REQUEST
})

export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS'
export type PostRequestSuccessAction = {
    type: typeof POST_REQUEST_SUCCESS,
    data: PostApi[]
}
export const PostRequestSuccess: ActionCreator<PostRequestSuccessAction> = (data: PostApi[]) => ({
    type: POST_REQUEST_SUCCESS,
    data,
})

export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR'
export type PostRequestErrorAction = {
    type: typeof POST_REQUEST_ERROR,
    error: string
}
export const PostRequestError: ActionCreator<PostRequestErrorAction> = (error: string) => ({
    type: POST_REQUEST_ERROR,
    error,
})

export const PostRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(PostRequest())
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: {
            Authorization: `bearer ${getState().token}`,
        },
    })
        .then(({data}) => {
            const posts = data.data.children;
            const postData = posts.map(({data}: { data: PostApi }) => {
                const {id, author, sr_detail, thumbnail, created, title, score, num_comments} = data;
                return {
                    id,
                    author,
                    title,
                    score,
                    num_comments,
                    previewImage: thumbnail !== ("self" || "default" || "nsfw") ? thumbnail : 'https://lmedia.xyz/placeholder.png',
                    created,
                    avatar: sr_detail?.header_img ? sr_detail?.header_img : 'http://s1.iconbird.com/ico/2014/1/606/w512h5121390848145businessman512.png',
                };
            });
            dispatch(PostRequestSuccess(postData))
        })
        .catch((error) => {
            console.log(error)
            dispatch(PostRequestError(String(error)))
        });
}
