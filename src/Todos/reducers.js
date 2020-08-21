
import { 
    CREATE_TODO,
    REMOVE_TODO,
    COMPLETE_TODO,
    FETCH_TODO_FAILURE,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_INPROGRESS
} from './actions';

const initialDataContext= {isLoading:false, todos:[]};

export const dataContext = (state = initialDataContext, action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: {
            const {todo} = payload;

            return {
                ...state,
                todos: state.todos.concat(todo)
            };
        }

        case REMOVE_TODO: {
            const {id}=payload;
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== id)
            };
        }

        case COMPLETE_TODO:{
            const {id} = payload;
            return {
                ...state,
                todos: state.todos.map(todo =>{
                        if(todo.id === id){
                            return {...todo, isCompleted:true};
                        }
                    return todo
                })
            };
        }

        case FETCH_TODO_SUCCESS:{
            const {todos} = payload;
            return {
                ...state,
                isLoading:false,
                todos
            };
        }

        case FETCH_TODO_FAILURE:{
            return {
                ...state,
                isLoading:false
            };
        }

        case FETCH_TODO_INPROGRESS:{
            return {
                ...state,
                isLoading:true
            };
        }

        default: {
            return state;
        }
    }
}