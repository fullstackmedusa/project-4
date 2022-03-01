
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import CreateGroup from "../../components/CreateGroup/CreateGroup";
import GroupListFeed from "../../components/GroupListFeed/GroupListFeed";
import * as groupsAPI from "../../utils/groupsApi";

// import {create, getAll} from '../../utils/postApi'
import { Grid } from "semantic-ui-react";

export default function HomePage({ user }) {
  const [groups, setGroups] = useState([]); // <- likes are inside of the each post in the posts array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
 

  // R read in crud
  async function getGroups() {
    try {
      const data = await groupsAPI.getAll();
      console.log(data, " this is data,");
      setGroups([...data.groups]);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getGroups();
  }, []);

  return (
    <Grid centered>
       <Grid.Row>
        <Grid.Column>
          <Header user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
          <CreateGroup />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <GroupListFeed
            groups={groups}
            numPhotosCol={3}
            user={user}
            loading={loading}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
