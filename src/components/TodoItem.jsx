function TodoItem ({name, date, onDelete}) {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <div className="row align-items-cemtre">
                    <div className="col-12 col-md-6">{name}</div>
                    <div className="col-12 col-md-4">{date}</div>
                    <div className="col-12 col-md-2">
                        <button onClick={onDelete} className="btn btn-danger w-100">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoItem ;