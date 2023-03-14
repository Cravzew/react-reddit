import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {CommentData} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

interface PostApi {
    id: string,
    author: string,
    body: string,
    created: number
}

export function useCommentData(id: string) {
    const [data, setData] = useState<CommentData[]>([]);
    const token = useSelector<RootState, string>(state => state.token)

    useEffect(() => {
        if (token) {
            (async () => {
                const response = await axios.get(`https://oauth.reddit.com/comments/${id}`, {
                    headers: {Authorization: `bearer ${token}`}
                })

                const comments = response.data[1].data.children
                const commentsData = comments.map(({data}: { data: PostApi }) => {
                    const {author, body, created, id} = data;
                    return {
                        id,
                        author,
                        body,
                        created,
                    };
                })
                setData(commentsData)
            })()
        }
    }, [token])

    return [data]
}