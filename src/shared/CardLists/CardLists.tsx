import React, {useEffect, useRef, useState} from 'react';
import styles from './cardlists.css';
import {Card} from "./Card";
import {usePostsData} from "../../hooks/usePostsData";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export function CardLists() {

    const token = useSelector<RootState>(state => state.token)
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false)
    const [errorLoading, setErrorLoading] = useState('')
    const [nextAfter, setNextAfter] = useState('')
    const [loadCount, setLoadCount] = useState(0)

    const bottomOfList = useRef<HTMLDivElement>(null);

    async function load() {
        setLoading(true)
        setErrorLoading('')

        try {
            const {
                data: {
                    data: {
                        after,
                        children
                    }
                }
            } = await axios.get(`https://oauth.reddit.com/best.json?sr_detail=true&limit=10&after=${nextAfter}`, {
                headers: {Authorization: `bearer ${token}`},
            });

            setNextAfter(after)
            setPosts(prevChildren => prevChildren.concat(...children))
        } catch (error) {
            setErrorLoading(String(error))
        }
        setLoading(false)
    }

    function loadMore() {
        setLoadCount(loadCount + 1)
        load()
    }

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore()
            }
        }, {
            rootMargin: "10000px"
        });

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }
    }, [bottomOfList.current, nextAfter, token])

    return (
        <ul className={styles.cardsList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <div role="alert" style={{textAlign: "center"}}>
                    Нет ни одного поста
                </div>
            )}

            {posts.map(i => (
                <Card
                    previewImage={i.data.thumbnail}
                    id={i.data.id}
                    created={i.data.created}
                    author={i.data.author}
                    avatar={i.data.sr_detail.header_img}
                    score={i.data.score}
                    title={i.data.title}
                    num_comments={i.data.num_comments}
                    key={i.data.id}
                />
            ))}

            {loading && (
                <div role="alert" style={{textAlign: "center"}}>
                    Загрузка...
                </div>
            )}

            {errorLoading && (
                <div role="alert" style={{textAlign: "center"}}>
                    {errorLoading}
                </div>
            )}

            {
                loadCount !== 0 && loadCount % 3 === 0
                    ?
                    (<button
                        style={{display: "block", margin: "auto"}}
                        onClick={() => {
                            loadMore()
                        }}>
                        Загрузить ещё
                    </button>)
                    :
                    (<div ref={bottomOfList}/>)
            }
        </ul>
    );
}
