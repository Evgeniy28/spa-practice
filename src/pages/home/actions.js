export const ADD_TODO = 'ADD_TODO';
export const END_TODO = 'END_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(id, name) {
    let error = '';

    if (!name) {
        error = 'Enter name Todo!';
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
