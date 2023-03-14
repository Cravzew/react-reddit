import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action, ActionCreator} from "redux";
import {useEffect} from "react";

export const SAVE_TOKEN = 'SAVE_TOKEN'
export type SaveTokenAction = {
    type: typeof SAVE_TOKEN;
    token: string
}
export const saveToken: ActionCreator<SaveTokenAction> = (token: string) => ({
    type: SAVE_TOKEN,
    token,
})

export type AsyncAction = ThunkAction<void, RootState, unknown, Action<string>>
export const thunkSaveToken = (): AsyncAction => (dispatch) => {
    useEffect(() => {
        const token = window.__token__
        dispatch(saveToken(token))
    }, [])
}
