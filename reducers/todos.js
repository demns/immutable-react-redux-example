import Immutable from 'immutable'

export default (state = Immutable.List(), action) => {
  switch(action.type) {
    case 'addTodo':
      return state.unshift(action.todo);
    case 'removeTodo':
      	return state.delete(action.index);
    default:
      return state;
  };
}