import {assoc} from "../js/assoc";

export const generateRandomIndex = () => Math.random().toString(36).substring(2, 15);

// export const assignId = assoc('id', generateRandomIndex())(obj)
// export const generateId = <O extends object>(obj: O) => assignId(obj)

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomIndex())(obj)
