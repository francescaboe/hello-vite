import React from "react";
import {v4 as uuid} from "uuid";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
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

    const onTaskToggle = React.useCallback((e:React.MouseEvent<HTMLSpanElement>) => {
        const id = e.currentTarget.id;

        setTodos((prevTodos) => {
            return prevTodos.map(t =>
                t.id === id
                    ? {...t, checked: !t.checked}
                    : t
            )
        })

    },[])

    const onTaskEditSave = React.useCallback((label: string, id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.map(t =>
                t.id === id
                    ? {...t, label}
                    : t
            )
        })

    },[])

    const onTaskAddClick = React.useCallback((e: React.FormEvent<HTMLFormElement>)=> {
        const form = e.currentTarget as HTMLFormElement;
        const position = form.id;
        const input = form.elements[0] as HTMLInputElement;
        const label = input.value;

        setTodos((prevTodos) => {
            return position === 'top' ? [
                {
                    id: uuid(),
                    label,
                    checked: false
                },
                ...prevTodos
            ] : [
                ...prevTodos,
                {
                    id: uuid(),
                    label,
                    checked: false
                }
            ]
        })


    },[])

    const onDeleteClick = React.useCallback((e:React.MouseEvent<HTMLSpanElement>) => {
        const id = e.currentTarget.id;
        setTodos((prev)=> prev.filter(t => t.id !== id))
    },[])


    return (
        <section>
            <h1>Todos</h1>
            <TodoAdd onAddClick={onTaskAddClick} position="top"/>
            <ul style={{display: 'flex', flexDirection: 'column'}}>
                {todos.map(({id, label, checked}: Todo) =>
                    <TodoItem
                        key={id}
                        id={id}
                        label={label}
                        checked={checked}
                        onTaskToggle={onTaskToggle}
                        onTaskSave={onTaskEditSave}
                        onDeleteClick={onDeleteClick}
                    />
                    )}
            </ul>
            <TodoAdd onAddClick={onTaskAddClick} position="bottom"/>
        </section>
    )
}

export default Todos;