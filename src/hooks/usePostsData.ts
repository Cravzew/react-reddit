import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {PostApi, PostRequestAsync} from "../store/posts/postAction";

export function usePostsData() {
    const data = useSelector<RootState, PostApi[]>(state => state.posts.data)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(PostRequestAsync())
    }, []);

    return [data];
}
