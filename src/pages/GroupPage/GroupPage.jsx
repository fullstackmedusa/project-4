import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ToDo from "../../components/ToDo/ToDo";

import "../../assets/styles.css";



// import {create, getAll} from '../../utils/postApi'
import { Grid } from "semantic-ui-react";

export default function GroupPage({ user }) {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    return (
        <Grid centered>
           <Grid.Row>
            <Grid.Column>
              <Header user={user} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
             <ToDo />	   
          </Grid.Row>
        </Grid>
      );
    }
    