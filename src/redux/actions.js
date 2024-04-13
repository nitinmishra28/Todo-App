import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from './actionTypes';

// Action creator for adding a new todo
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

// Action creator for toggling a todo's completion status
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// Action creator for removing a todo
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

// Action creator for marking a todo as completed
export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

// Action creator for marking a todo as incomplete
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

// Action creator for filtering todos based on completion status
export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

// Action creator for marking all todos as completed
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

// Action creator for updating the search term for filtering todos
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
