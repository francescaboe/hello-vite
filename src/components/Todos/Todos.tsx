import React from "react";
import {v4 as uuid} from "uuid";
import TodoItem from "./TodoItem/TodoItem.tsx";
const initialData: Todo[] = [
    {
        id: uuid(),
        label: "Buy groceries",
        checked: false,
    },
    {
        id: uuid(),
        label: "Reboot computer",
        checked: false,
    },
    {
        id: uuid(),
        label: "Ace CoderPad interview",
        checked: true,
    },
];

// add new todo
// remove todo
// edit todo - row becomes input
// toggle todo (have checked at the bottom, if you uncheck a checked one, move on top)
// persist list

function Todos(){
    const [todos, setTodos] = React.useState<Todo[]>(initialData);

    const onTaskClick = React.useCallback((e:React.MouseEvent<HTMLSpanElement>) => {
        const id = e.currentTarget.id;

        setTodos((prevTodos) => {
            return prevTodos.map(t =>
                t.id === id
                    ? {...t, checked: !t.checked}
                    : t
            )
        })

    },[])
    return (
        <section>
            <h1>Todos</h1>
            <ul>
                {todos.map(({id, label, checked}: Todo) =>
                    <TodoItem
                        key={id}
                        id={id}
                        label={label}
                        checked={checked}
                        onTaskClick={onTaskClick}
                    />
                    )}
            </ul>
        </section>
    )
}

export default Todos;