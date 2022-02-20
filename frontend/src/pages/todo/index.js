import { useEffect, useState } from "react";
import instance from "../../utils/axios";

const Todo = () => {
const [input, setInput] = useState("");
const [toDos, setToDos] = useState([]);

useEffect(() => {
getData();
}, []);

const getData = async () => {
try {
const todoRes = (await instance.get(`/todo`)).data;
console.log(todoRes);
setToDos(todoRes[0]);
} catch (error) {
console.log(error);
}
};

return (
<div className="todos-container">
{toDos.length > 0 ? (
<div >
<div>To dos page</div>
</div>
) : (
<div>Loading</div>
)}
</div>
);
};

export default Todo;