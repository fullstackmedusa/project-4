import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react';
import * as tasksAPI from "../../utils/tasksApi";


function TaskEdit(props) {
  const [state, setState] = useState({
		desc: '',
		date: '',
		complete: false,
	})
 
  // const saveTask = (e) => {
  //   e.preventDefault();
  //   onSaveTask({ desc: desc, date: date, complete: complete });

  //   setDesc("");
  //   setDate("");
  //   setComplete(false);
  // };







 
  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    
    formData.append('desc', state.desc)
    formData.append('date', state.date)
    formData.append('complete', state.complete)
   
	props.handleCreateTask(formData)
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
          value={state.desc}
          onChange={handleChange}
        />

        <label htmlFor="date">Date</label>
        <Form.Input
          type="text"
          name="date"
          id="date"
          value={state.date}
          onChange={handleChange}
        />

        <div className="text-right">
          <Button className="button dark" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default TaskEdit;
