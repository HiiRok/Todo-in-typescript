import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if(enteredText.trim().length === 0) {
      return alert('please enter a valid text!');
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Enter your Todo</label>
      <input type='text' id='text' placeholder="Your data" ref={todoTextInputRef} />
      <button type="submit">Add ToDo!</button>
    </form>
  );
};

export default NewTodo;