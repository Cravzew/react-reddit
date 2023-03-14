import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {atom, useAtom} from "jotai";

export function CommentForm({name}: {name?: string}) {

    const textValue = !name ? 'Привет, Jotai' : `${name}, `

    const [value, setValue] = useAtom(atom(textValue))

    const [touched, setTouched] = useState(false)
    const [valueError, setValueError] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setTouched(true)

        setValueError(validateValue())

        const isFormValidate = !validateValue()
        if (!isFormValidate) return;

        alert('Форма отправлена')
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value)
    }

    function validateValue() {
        if (value.length <= 3) return 'введите больше 3 символов'
        return ''
    }

    return (
        <Formik onSubmit={() => alert('Форма отправлена')} initialValues={{
            comment: atom(textValue)
        }}>
            <Form className={styles.form} onSubmit={handleSubmit}>
                <Field
                    as="textarea"
                    className={styles.input}
                    name="comment"
                    value={value}
                    onChange={handleChange}
                    aria-invalid={valueError ? 'true' : undefined}
                    validate={validateValue}
                />
                {touched && valueError &&
                    (
                        <ErrorMessage name="comment">{() => <div>{valueError}</div>}</ErrorMessage>
                    )
                }
                <button type='submit' className={styles.button}>Комментировать</button>
            </Form>
        </Formik>
    );
}
