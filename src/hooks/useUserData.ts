import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {IUserData, meRequestAsync} from "../store/me/actions";
import {thunkSaveToken} from "../store/token/saveToken";

export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const token = useSelector<RootState, string>(state => state.token)
    const loading = useSelector<RootState, boolean>(state => state.me.loading)
    const dispatch = useDispatch<any>();

    useEffect(() => {
        if (!token) return;
        dispatch(meRequestAsync());
    }, [token])

    return {
        data,
        loading
    }
}