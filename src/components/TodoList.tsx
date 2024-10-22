import { Todo } from "../types/todo";
import smallLogo from "../assets/smallLogo.svg";
import bin from "../assets/bin.svg";
import plus from "../assets/plus.svg";
import { useEffect, useState } from "react";

const TodoList = () => {
    const [newTask, setNewTask] = useState("");
    const storage = localStorage.getItem("todoList");
    const [todos, setTodos] = useState<Todo[]>(storage ? JSON.parse(storage) : []);

    // useEffect for saving todos to localStorage when todos change
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todos));
    }, [todos]);

    const setIsDone = (todo: Todo) => {
        const updatedTodos = todos.map((t) =>
            t.text === todo.text ? { ...t, isDone: !t.isDone } : t
        );
        setTodos(updatedTodos);
    };

    const removeFromList = (todo: Todo) => {
        const updatedTodos = todos.filter((t) => t.text !== todo.text);
        setTodos(updatedTodos);
    };

    const addToList = () => {
        if (!newTask.trim()) return; // Prevent adding empty tasks
        if (todos.some((t) => t.text === newTask.trim())) {
            alert("Task already exists!"); // Optionally show a warning
            return;
        }
        const newTodo: Todo = {
            text: newTask.trim(),
            isDone: false,
        };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        setNewTask(""); // Clear the input field
    };

    const TodoContainer = ({ todo }: { todo: Todo }) => (
        <div className={`todoContainer ${todo.isDone ? "isDone" : ""}`}>
            <div>
                <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => setIsDone(todo)}
                    aria-label={`Mark ${todo.text} as done`}
                />
                <p>{todo.text}</p>
            </div>
            <img onClick={() => removeFromList(todo)} src={bin} alt="Delete task" />
        </div>
    );

    return (
        <div className="todoListWrapper">
            <div className="todoListSection">
                <header className="header">
                    <img src={smallLogo} alt="Logo" />
                </header>
                {todos.map((todo, index) => (
                    <TodoContainer key={index} todo={todo} />
                ))}
            </div>
            <footer>
                <input
                    type="text"
                    value={newTask}
                    placeholder="Add a new task"
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addToList}>
                    <img src={plus} alt="Add task" />
                </button>
            </footer>
        </div>
    );
};

export default TodoList;
