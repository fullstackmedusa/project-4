import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link, useNavigate } from "react-router-dom";

function GroupCard({group, user}) { 

  const navigate = useNavigate()
  
      
    return (
     
        <Card key={group?._id? group._id : ''} onClick={()=>{navigate(`/group/${group._id}`)}} >
        <Image src={`${group?.photoUrl? group.photoUrl : ''}`} wrapped ui={false} />
        <Card.Content>
          <Card.Description>{group?.name? group.name : ''}</Card.Description>
          <Card.Content><h3>{group?.user_id?.first_name? group.user_id.first_name :''}</h3></Card.Content>
        </Card.Content>
      </Card>
  
    )
  }
  
  export default GroupCard;