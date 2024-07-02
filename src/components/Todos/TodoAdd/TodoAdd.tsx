import React from "react";

interface TodoAddProps {
    onAddClick: React.FormEventHandler;
    position: 'top' | 'bottom'
}

function TodoAdd({ onAddClick, position }: TodoAddProps){
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isDisabled, setIsDisabled] = React.useState(false);

    React.useEffect(() => {
        // Function to check if the input is empty and set the disabled state of the button accordingly
        const checkInput = () => {
            if (inputRef.current) {
                // Disable the button if the input is empty, enable it otherwise
                setIsDisabled(inputRef.current.value.trim() === '');
            }
        };

        // Initial check when the component mounts
        checkInput();

        // Add event listener to input element to check its value on every input
        if (inputRef.current) {
            inputRef.current.addEventListener('input', checkInput);
        }

        // Clean up: remove the event listener when the component unmounts or re-renders
        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener('input', checkInput);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputRef.current && inputRef.current.value.trim()) {
            onAddClick(e);
            // Clear the input field after submission
            inputRef.current.value = '';
            setIsDisabled(true);
        }
    };


    return (
        <form
            id={position}
            onSubmit={handleSubmit}
            style={{display:'flex', alignItems: 'baseline', justifyContent: 'left', width: '300px'}}>
            <input
                style={{marginRight: '5px'}}
                ref={inputRef}
                type="text"
                placeholder={`Add a task at the ${position}`}
            />
            <div>
                <button
                    disabled={isDisabled}
                    style={{borderColor: 'green', marginRight: '2px', width: '75px'}}
                    type="submit">Add</button>
            </div>
        </form>
    )
}

export default TodoAdd;