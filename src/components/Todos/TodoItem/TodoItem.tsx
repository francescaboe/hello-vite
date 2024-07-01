import React from "react";

export interface TodoItemProps extends Todo {
    onTaskClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
}


function TodoItem({ id, label, checked, onTaskClick }: TodoItemProps) {
    const [isEdit, setIsEdit] = React.useState<boolean>(false);

    const onEditClick = () => {
        setIsEdit((prev)=> !prev);
    }

    const onSaveClick = () => {
        // save changes
        setIsEdit((prev)=> !prev);
    }

    const onDeleteClick = () => {
        // delete task
    }

    return (
        <li key={id} style={{display:'flex', alignItems: 'center', margin: '5px'}}>
            {isEdit
                ? <>
                    <input
                        style={{textDecoration: checked ? 'line-through' : 'none'}}
                        type="text"
                        value={label}
                        disabled={!isEdit}
                        autoFocus
                    />
                    <button style={{borderColor: 'green'}} onClick={onSaveClick}>Save</button>
                    <button style={{borderColor: 'orange'}} onClick={onEditClick}>Discharge</button>
                </>
                :
                <>
                    <span
                        style={{
                            textDecoration: checked ? 'line-through' : 'none',
                            cursor: 'pointer',
                            display: 'inline-block',
                            width: '163px',
                            color: 'black',
                            fontFamily: 'sans-serif',
                            border: '1px solid #ccc',
                            backgroundColor: '#fff',
                            height: '19px',
                            fontSize: '13px',
                            textAlign: 'left',
                            padding: '0 2px'
                        }}
                        id={id}
                        onClick={onTaskClick}
                    >
  {label}
</span>
                    <button style={{borderColor: 'blue'}} onClick={onEditClick}>Edit</button>
                    <button style={{borderColor: 'red'}} onClick={onDeleteClick}>Delete</button>
                </>
            }
        </li>
    )
}

export default TodoItem;