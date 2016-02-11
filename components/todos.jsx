import { connect } from 'react-redux';

import NewTodo from './newTodo';
import RemoveTodo from './removeTodo';
import Todo from '../actions/todos';

const Todos = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <NewTodo onChange={e => {
      if (e.keyCode == 13) {
        dispatch(Todo.add(e.target.value))
        e.target.value = ''
      }
    }}/>
    {todos.map((todo, key) => (
      <div key={key}>
        {todo}
        <RemoveTodo remove = { () => {
          console.log(key);
          dispatch(Todo.remove(key))
        }}/>
      </div>
    ))}
  </div>
);

export default connect(todos => ({ todos: todos }))(Todos);