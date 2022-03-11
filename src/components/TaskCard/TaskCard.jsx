import React from 'react';
import { Card, CardHeader, Icon, Image, Checkbox } from 'semantic-ui-react'
import "./Taskcard.css"


function TaskCard({task}) { 

 
  return (
    <Card style={{ maxWidth: 400 }} key={task._id}>
   
      <Card.Content>
        <Card.Header>{task.description}</Card.Header>
      
      </Card.Content>
      <Card.Content >
        <Card.Description>
        {task.duration}
        <Checkbox style={{textAlign: 'right'}} size='large' color={'grey'} />
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default TaskCard;

// import React from 'react';
// import { Card, Icon, Image } from 'semantic-ui-react'
// import { Link, useNavigate } from "react-router-dom";

// function TaskCard({task}) { 

  
  
      
//     return (
     
//         <Card key={task?._id? task._id : ''} >
//         <Card.Content>
//           <Card.Description>{task.desc}</Card.Description>
//           <Card.Description>{task.date}</Card.Description>
//         </Card.Content>
//       </Card>
  
//     )
//   }
  
//   export default TaskCard;