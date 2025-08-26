function TaskItem({ taskName, deleteTask, completeTask, isCompleted }) {
  return (
    <li className="task-item d-flex justify-content-between align-items-center">
      <span>{taskName}</span>
      <div>
        {!isCompleted && (
          <button 
            className="btn btn-success btn-sm me-2" 
            onClick={() => completeTask(taskName)}
          >
            Complete
          </button>
        )}
        <button 
          className="btn btn-danger btn-sm" 
          onClick={() => deleteTask(taskName)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
