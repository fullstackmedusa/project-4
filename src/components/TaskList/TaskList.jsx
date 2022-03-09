import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import TaskCard from '../TaskCard/TaskCard';


export default function TaskList({
    tasks,
    
  }) {
  
   
  
  
    return (
  
      <Card.Group itemsPerRow={1} stackable >
      {tasks.map((task) => {
        return (
        
          <GroupCard
            task={task}
            key={task._id}
            
          />
        );
      })}
    </Card.Group>
  
  
  
  
   
    );
  }