import { act } from 'react-dom/test-utils';
import {combineReducers} from 'redux'
const initialState=[];
let todoReducer = (state=initialState,action)=>{
    switch(action.type){
        
        case 'ADD_TODO':
            return [...state,action.payload];
        case 'EDIT_TODO':
            return state.map((value)=>value===action.PrevData?action.NewData:value);
        case 'DELETE_TODO':
            return state.filter((value)=>value!==action.payload);
        default:
            return state;

    }
}

let readReducer = (state='',action)=>{
    switch(action.type){
        case 'READ_TODO':
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todoReducer,
    readReducer
})

export default rootReducer;