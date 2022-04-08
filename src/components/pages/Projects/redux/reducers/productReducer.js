import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products:[],
    id: 1,
    title:"Projects",
    category:"Finance",
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECT_PRODUCT:
            return state

        default:
            return state;
    }
}