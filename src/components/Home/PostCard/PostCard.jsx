import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function PostCard({group, user}) { 


    // post.likes = [{userId: 1234, username: 'jim', _id: 'likeId1234'}]
    // user = {username: 'jim, _id: 'userId1234'} <- logged in user
  
    // if the logged in user's id is in the post.likes array of objects, then the logged user has liked the post, so the heart
    // should be red
    // onClick removeLike Function
  
    // if the logged in users id is not in post.likes array of objects, then the logged in user has NOT liked the post, so the heart
    // should be grey
    // on click CreateLike Function
  
  
  
    // Step 1 Is the logged user in the post.likes array?
    // if the user liked this post, it will return the index of the like
    // if not liked = -1 
   
  
  
    // step 3 onClick Handler
    // if the user has liked the post, 
    // clickHandler = removeLike
   
  
  
      
    return (
      <Card key={group._id} raised>
      <Image src={`${group.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{group.name}</Card.Description>
        <Card.Footer><h3>{group.user.first_name}</h3></Card.Footer>
      </Card.Content>
    </Card>
    )
  }
  
  export default PostCard;