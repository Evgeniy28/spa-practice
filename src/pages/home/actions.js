import { LocalStorageManager, delay } from '../../utils/index';

export const ADD_TODO = 'ADD_TODO';
export const END_TODO = 'END_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_TODOS = 'GET_TODOS';

export function addTodo(todos, name) {
    let error = '';

    if (!name) {
        error = 'Enter name Todo!';
    }

    let id = 1;

    if (todos.length) {
        id = todos[todos.length - 1].id + 1;
    }

    return {
        type: ADD_TODO,
        id, name, error
    };
}

export function endTodo(todo) {
    const end = !todo.end;

    return {
        type: END_TODO,
        todo, end
    };
}

export function deleteTodo(todo) {
    return {
        type: DELETE_TODO,
        todo
    };
}

export function getTodos() {
    const todos = LocalStorageManager.get('todos');

    return (dispatch) => {
        delay(2000).then(() => {
            dispatch({
                type: GET_TODOS,
                todos
            });
        });
    };
}
