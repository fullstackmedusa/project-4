import React, { useState } from 'react';
import './CreateGroup.css';
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react';

export default function CreateGroupForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    name: ''
  })

  const navigate = useNavigate();
  const params = useParams();

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile); // this key matches the key in multer in the 
	// routes/api/posts create route upload.single('photo')
    formData.append('name', state.name)
   
	props.handleCreateGroup(formData)
    // Have to submit the form now! We need a function!
  }


  return (
    
    <Grid textAlign='center' verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      
        <img src="https://i.imgur.com/HzvulAD.jpg" alt="Logo" className='logo'/>
        <h1>Create New Group</h1>
        <Segment >
        
            <Form  autoComplete="off" onSubmit={handleSubmit} className="add__container">
            
              <Form.Input
                  className="form-control"
                  name="name"
                  value={state.name}
                  placeholder="Super Cool Group Name"
                  onChange={handleChange}
                  required
              />   
              
              
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload a group icon!"
                onChange={handleFileInput}
              />  
              
              <Button
                type="submit"
                className="btn"
              >
                Create Group
              </Button>
            </Form>
          </Segment>
          </Grid.Column>
    </Grid>
 
  ); 
}




