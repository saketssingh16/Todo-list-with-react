import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo }) {
  if (todos.length === 0) {
    return <p className="text-muted text-center">No todos. Add one!</p>;
  }

  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          name={todo.name}
          date={todo.date}
          onDelete={() => onDeleteTodo(index)}
        />
      ))}
    </>
  );
}

export default TodoList;
