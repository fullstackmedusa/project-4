import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link, useNavigate } from "react-router-dom";

function TaskCard({task}) { 

  
  
      
    return (
     
        <Card key={task?._id? task._id : ''} >
        <Card.Content>
          <Card.Description>{task.desc}</Card.Description>
          <Card.Description>{task.date}</Card.Description>
        </Card.Content>
      </Card>
  
    )
  }
  
  export default TaskCard;