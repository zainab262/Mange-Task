import { ADD_TODO , DELETE_TODO , EDIT_TODO} from "../actions/action"
let initState={todo:[]}
export let todoReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_TODO:
            // let updated_todo={todo:[...state.todo,action.payload]}
            // return updated_todo
            return { 
                ...state, 
                todo: [...state.todo, action.payload] 
            };
        case DELETE_TODO:
            return { 
                ...state, 
                todo: state.todo.filter((_, index) => index !== action.payload) 
            };    
            
        case EDIT_TODO:
            return { 
                ...state, 
                todo: state.todo.map((item, index) => 
                    index === action.payload.index ? action.payload.newTask : item
                ) 
            };
        default:
            return state    
    }

}

// let update_todo={todo:[...state.todo,action.payload]}
