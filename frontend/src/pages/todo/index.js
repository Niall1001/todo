import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import TodoCard from "./components/TodoCard";
const Todo = () => {
const [input, setInput] = useState("");
const [toDos, setToDos] = useState([]);

useEffect(() => {
getData();
}, []);

const getData = async () => {
try {
const todoRes = (await instance.get(`/todo`)).data.todos;
console.log(todoRes);
setToDos(todoRes);
} catch (error) {
console.log(error);
}
};

return (
<div className="todos-container">
{toDos.length > 0 ? (
<div >
    {
    toDos.map((todo) => {
        <TodoCard
        id={todo.id}
        description={todo.description}
        completed={todo.completed} />
    })
    }
</div>
) : (
<div>Loading</div>
)}
</div>
);
};

export default Todo;