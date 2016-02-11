const add = todo => {
  return {
    type: 'addTodo',
    todo
  };
};

const remove = index => {
  return {
    type: 'removeTodo',
    index
  };
};

export default { add, remove }