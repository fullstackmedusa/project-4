import Task from "../Task/Task";
import "./Tasks.css";
function Tasks({ tasks, onTglStatus }) {
  return (
    <div className="row">
      {tasks.map((task) => (
        <Task task={task} onTglStatus={onTglStatus} key={task.id} />
      ))}
      <div className="col-12"></div>
    </div>
  );
}

export default Tasks
