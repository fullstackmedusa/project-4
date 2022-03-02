import "./ToDo.css";
import "../../assets/styles.css";
import React, {useState} from "react";
import { useParams } from "react-router-dom";
import Tasks from "../Tasks/Tasks";
import TaskEdit from "../TaskEdit/TaskEdit";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import * as tasksAPI from "../../utils/tasksApi";

export default function ToDo() {
	const [tasks, setTasks] = useState([])
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const params = useParams();
	const [state, setState] = useState({
		desc: '',
		date: '',
		complete: false,
	})
	
	const [showTaskEdit, setShowTaskEdit] = useState(false);
	const onTglStatus = (task) => {
		console.log("completing task");
		setTasks(
		  tasks.map((chkTask) => {
			chkTask.complete =
			  task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
			return chkTask;
		  })
		);
	  };
	  const onSaveTask = ({ desc, date }) => {
		console.log("saving tasks");
		setTasks([
		  { desc: desc, date: date, complete: false },
		  ...tasks,
		]);
	  };
	
	 
	  async function handleCreateTask(task) {
		console.log(params.id, '<-- params.id')
		try {
		  setLoading(true);
		  const data = await tasksAPI.create(task, params.id); // our server is going to return
		  // the created post, that will be inside of data, which is the response from
		  // the server, we then want to set it in state
		  console.log(data, " this is response from the server, in handleCreateTask");
		  setTasks([data.task, ...tasks]);
		  setLoading(false);
		} catch (err) {	
		  setError(err.message);
		  console.log(err);
		  setError(err.message);
		}
	  }
	  
	  
	return (
		<div className="ToDo">
			 <div className="container">
        <div className="col-12 text-right">
          <button
            className="button outline"
            onClick={() => setShowTaskEdit(!showTaskEdit)}>
            {!showTaskEdit && "New"}
            {showTaskEdit && "➖"}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} handleCreateTask={handleCreateTask} />}
        <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
      </div>
    </div>
  );
}

