import React from "react";

export interface TodoItemProps extends Todo {
    onTaskToggle: (event: React.MouseEvent<HTMLSpanElement>) => void;
    onTaskSave: (label: string, id: string) => void;
    onDeleteClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
}


function TodoItem({ id, label, checked, onTaskToggle, onTaskSave, onDeleteClick }: TodoItemProps) {
    const [isEdit, setIsEdit] = React.useState<boolean>(false);
    const [labelText, setLabelText] = React.useState(label);

    const onEditClick = () => {
        setIsEdit((prev)=> !prev);
        setLabelText(label);
    }

    const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLabelText(e.target.value)
    }

    const onSaveClick = () => {
        onTaskSave(labelText, id);
        setIsEdit((prev)=> !prev);
    }

    return (
        <li key={id} style={{display:'flex', alignItems: 'baseline', justifyContent: 'left', width: '380px'}}>
            {isEdit
                ? <>
                    <input
                        style={{textDecoration: checked ? 'line-through' : 'none', marginRight: '5px'}}
                        type="text"
                        value={labelText}
                        onChange={onLabelChange}
                        disabled={!isEdit}
                        autoFocus
                    />
                    <div>
                        <button
                            style={{borderColor: 'green', marginRight: '2px', width: '75px'}}
                            onClick={onSaveClick}
                            disabled={labelText.trim() === ''}
                        >Save</button>
                        <button style={{borderColor: 'orange', width: '75px'}} onClick={onEditClick}>Discharge</button>
                    </div>
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
                            padding: '0 2px',
                            marginRight: '5px'
                        }}
                        id={id}
                        onClick={onTaskToggle}
                    >{label}</span>
                    <div>
                        <button style={{borderColor: 'blue', marginRight: '2px', width: '75px'}} onClick={onEditClick}>Edit</button>
                        <button style={{borderColor: 'red', width: '75px'}} id={id} onClick={onDeleteClick}>Delete</button>
                    </div>
                </>
            }
        </li>
    )
}

export default TodoItem;