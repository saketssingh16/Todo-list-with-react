import { useRef } from "react";


function AddTodo ({onAdd}) {
    const todoNameRef = useRef();
    const todoDateRef = useRef ();

    const handleAddClick = () => {
        const name = todoNameRef.current.value;
        const date = todoDateRef.current.value ;

        if (!name || !date ) return ;

        onAdd ({name,date});


    todoNameRef.current.value ="";
    todoDateRef.current.value ="";
    };
    return (
        <div className="row mb-4">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
                <input 
                ref={todoNameRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter todo..."
                />
            </div>
            <div className="col-12 col-md-4 mb-2 mb-md-0">
                <input 
                ref={todoDateRef}
                    type="date"
                    className="form-control"
                />
            </div>
            <div className="col-12 col-md-2">
                <button onClick ={handleAddClick} className="btn btn-success w-100">Add</button> 
            </div>
        </div>
    );
}

export default AddTodo;
