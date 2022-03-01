import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react';
import * as tasksAPI from "../../utils/tasksApi";

///////////////
export default function CreateTaskForm(props){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [state, setState] = useState({
      desc: '',
      date:'',
      complete:'false'

    })

///////////////


function TaskEdit({ task, onSaveTask }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date });

    setDesc("");
    setDate("");
  };

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [state, setState] = useState({
    desc: '',
    date: '',
  })






  async function handleCreateTask(task) {
    try {
      setLoading(true);
      const data = await tasksAPI.create(task); // our server is going to return
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

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    
    formData.append('desc', state.desc)
    formData.append('date', state.date)
   
	handleCreateTask(formData)
    // Have to submit the form now! We need a function!

  }

  return (
    <div className="card">
      <h3>Add Task</h3>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="desc">Description</label>
        <Form.Input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <Form.Input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="text-right">
          <Button className="button dark" onClick={saveTask}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default TaskEdit;
