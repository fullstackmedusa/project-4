import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import AddTask from "../../components/AddTask/AddTask";
// import Loading from "../../components/Loader/Loader";
import TaskList from "../../components/TaskList/TaskList";
import Calendar from "../../components/Calendar/CalendarContainer";
import * as tasksApi from "../../utils/tasksApi";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Grid, GridRow } from "semantic-ui-react";


export default function HomePage({user, handleLogout, itemsPerRow}){

  const [tasks, setTasks] = useState([])

  async function handleAddTask(task) {
    try {
      const data = await tasksApi.create(task); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      setTasks(tasks => [data.task, ...tasks])
      console.log(data, " this is response from the server, in handleAddPost");
    } catch (err) {
      console.log(err);
    }
  }
  async function getTasks() {
    try {
      const data = await tasksApi.getAll();
      console.log(data, " this is data,");
      setTasks([...data.tasks]);
      
    } catch (err) {
      console.log(err.message, " this is the error");
      
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getTasks();
  }, []);

  return(
  <Grid >
        <Grid.Row>
          <Grid.Column>
            <Header user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddTask handleAddTask={handleAddTask} user={user}  />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <TaskList
              tasks={tasks}
              user={user}
              itemsPerRow={1}
            />
          </Grid.Column>
        </Grid.Row>
        <GridRow>
          <Grid.Column >
            <Calendar />
            </Grid.Column>
        </GridRow>
      </Grid>
    );
  }
// export default function HomePage({ user, handleLogout, }) {
// 	const [tasks, setTasks] = useState([]);
// 	const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");


// // C create in Crud
//   // we invoke this function in addPost component when the submit button on our form is clicked
//   // so we need to pass it as a prop


//   // R read in crud
//   async function getTasks() {
//     try {
//       const data = await tasksAPI.getAll();
//       console.log(data, " this is data,");
//       setTasks([...data.tasks]);
//       setLoading(false);
//     } catch (err) {
//       console.log(err.message, " this is the error");
//       setError(err.message);
//     }
//   }

//   // useEffect runs once
//   // the component is first rendered (whenever you first view the component)
//   // Component Lifecycle in react
//   useEffect(() => {
//     getTasks();
//   }, []);

//   if (loading) {
//     return (
//       <>
//         <Header handleLogout={handleLogout} user={user} />
//         <Loading />
//       </>
//     );
//   }

//   if (error) {
//     return (
//       <>
//         <Header handleLogout={handleLogout} user={user} />
//         <ErrorMessage error={error} />;
//       </>
//     );
//   }

//   return (
    