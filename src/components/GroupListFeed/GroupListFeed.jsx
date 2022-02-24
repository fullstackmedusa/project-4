import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import GroupCard from '../GroupCard/GroupCard';
import Loader from '../Loader/Loader';

export default function GroupListFeed({
  groups,
  numPhotosCol,
  user,
  loading
}) {

 


  return (

    <Card.Group itemsPerRow={numPhotosCol} stackable>
    {loading ? (
      <Segment>
        <Dimmer active inverted>
          <Loader size="small">Loading</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    ) : null}
    {groups.map((group) => {
      return (
        <GroupCard
          group={group}
          key={group._id}
          user={user}
        />
      );
    })}
  </Card.Group>




 
  );
}