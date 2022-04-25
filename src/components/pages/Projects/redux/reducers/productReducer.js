import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products:[],
    id: 1,
    title:"Projects",
    category:"Finance",
    description:"This is one of my first projects, it was created using flask and it took me over a week to finish it",
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECT_PRODUCT:
            return state

        default:
            return state;
    }
}