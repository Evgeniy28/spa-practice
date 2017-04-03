import { ADD_TODO, END_TODO, DELETE_TODO } from './actions';

const initialState = {
    todos: [
        {
            id: 1,
            name: 'Todo 1',
            end: false
        }
    ],
    error: ''
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const todos = state.todos;
            if (!action.error) {
                todos.push({ id: action.id, name: action.name, end: false });
            }
            return { ...state, error: action.error, todos };
        case END_TODO:
            const index = state.todos.findIndex(todo => todo.id === action.todo.id);
            state.todos[index].end = action.end;
            return { ...state, todos: state.todos };
        case DELETE_TODO:
            const filteredTodos = state.todos.filter(todo => todo.id !== action.todo.id);
            return { ...state, todos: filteredTodos };

        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;
