import React, { useState } from 'react';


import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react'

export default function AddTaskForm(props){
  const [state, setState] = useState({
    description: '',
    duration:'',
    
  })

  


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    // const formData = new FormData()
    // formData.append('description', state.description)
    // formData.append('duration', state.duration)
    props.handleAddTask(state)
    
    // Have to submit the form now! We need a function!
  }


  return (
    
    <Grid textAlign='left' >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.Input
                  className="form-control"
                  name="description"
                  value={state.description}
                  placeholder="Whatcha gotta get done?"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                className="form-control"
                name="duration"
                value={state.duration}
                placeholder="'bout how long will it take?'?"
                onChange={handleChange}
                required
              />   
              <Button
                type="submit"
                className="btn"
              >
                ADD TASK
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}

