import {Action, ActionCreator, Reducer} from "redux";
import {
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAction,
    MeRequestErrorAction,
    MeRequestSuccessAction
} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";
import {AsyncAction, SAVE_TOKEN, SaveTokenAction} from "./token/saveToken";
import {
    POST_REQUEST, POST_REQUEST_ERROR,
    POST_REQUEST_SUCCESS,
    PostRequestAction,
    PostRequestErrorAction,
    PostRequestSuccessAction
} from "./posts/postAction";
import {postReducer, PostState} from "./posts/postReducer";
import {ThunkAction} from "redux-thunk";

export type RootState = {
    commentText: string
    token: string
    me: MeState
    posts: PostState
}
const initialState: RootState = {
    commentText: 'Привет, Skillbox',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {},
    },
    posts: {
        data: [],
        error: ''
    }
}

const UPDATE_COMMENT = 'UPDATE_COMMENT'
type updateCommentAction = {
    type: typeof UPDATE_COMMENT,
    text: string,
}
export const updateComment: ActionCreator<updateCommentAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text,
});

type MyAction =
    updateCommentAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction
    | SaveTokenAction
    | PostRequestAction
    | PostRequestErrorAction
    | PostRequestSuccessAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        case POST_REQUEST:
        case POST_REQUEST_SUCCESS:
        case POST_REQUEST_ERROR:
            return {
                ...state,
                posts: postReducer(state.posts, action)
            }
        case SAVE_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}
