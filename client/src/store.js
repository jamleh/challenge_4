import  { createStore } from 'redux';

//initial state for my store
const initial={
    current:'red',
    board:[
        [], //col 0
        [], //col 1
        [], //col2
        [], //col3
        [],
        [],
        [],



    ]
};
function reducer(state,action){
    if(action.type==='DROP_TILE'){
        console.log("dropping into Col "+action.payload);
    }
    return state;
}
export default createStore(reducer,initial);