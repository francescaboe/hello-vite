import React from "react";

interface TodoAddProps {
    onAddClick: React.FormEventHandler;
    position: 'top' | 'bottom'
}

function TodoAdd({ onAddClick, position }: TodoAddProps){

    return (
        <form
            id={position}
            onSubmit={onAddClick}
            style={{display:'flex', alignItems: 'baseline', justifyContent: 'left', width: '300px'}}>
            <input
                style={{marginRight: '5px'}}
                type="text"
                placeholder={`Add a task at the ${position}`}
            />
            <div>
                <button
                    style={{borderColor: 'green', marginRight: '2px'}}
                    type="submit">Add</button>
            </div>
        </form>
    )
}

export default TodoAdd;