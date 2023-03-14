import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CommentForm} from "../Post/CommentForm";
import {RootState, updateComment} from "../../store/store";

export function CommentFormContainer() {

    const value = useSelector<RootState, string>(state => state.commentText)
    const dispatch = useDispatch()

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value))
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(value)
    }

    return (
        <CommentForm
        // value={value}
        // onChange={handleChange}
        // onSubmit={handleSubmit}
        />
    );
}
