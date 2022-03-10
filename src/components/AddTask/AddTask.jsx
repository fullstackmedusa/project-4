import React, { useState } from 'react';

export default function AddPostForm(){
    
    return (
        <span> Task Form</span>
    )
}





// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react';
// import * as tasksAPI from "../../utils/tasksApi";


//   export function CreateTaskForm(props){
//     const [tasks, setTasks] = useState([]);
//     const [state, setState] = useState({
//       desc: '',
//       date: '',
//       complete: false,
//     })

//     const {groupId} = useParams();
   
    
//   // const saveTask = (e) => {
//   //   e.preventDefault();
//   //   onSaveTask({ desc: desc, date: date, complete: complete });

//   //   setDesc("");
//   //   setDate("");
//   //   setComplete(false);
//   // };







 
//   function handleChange(e){
//     setState({
//       ...state,
//       [e.target.name]: e.target.value
//     })
//   }

//   async function handleCreateTask(task, groupId) {
      
//       const data = await tasksAPI.create(task,groupId ); // our server is going to return
//       // the created post, that will be inside of data, which is the response from
//       // the server, we then want to set it in state
      
//       console.log(data, " this is response from the server, in handleCreateGroup");
//       setTasks([data.task, ...tasks]);
      
//   }

//   function handleSubmit(e){
//     e.preventDefault()
             
//     const formData = new FormData()
    
//     formData.append('desc', state.desc)
//     formData.append('date', state.date)
//     formData.append('complete', state.complete)
   
// 	  handleCreateTask(formData)
//     // Have to submit the form now! We need a function!

//   }

//   return (
//     <div className="card">
//       <h3>Add Task</h3>
//       <Form autoComplete="off" onSubmit={handleSubmit}>
//         <label htmlFor="desc">Description</label>
//         <Form.Input
//           type="text"
//           name="desc"
//           id="desc"
//           value={state.desc}
//           onChange={handleChange}
//         />

//         <label htmlFor="date">Date</label>
//         <Form.Input
//           type="text"
//           name="date"
//           id="date"
//           value={state.date}
//           onChange={handleChange}
//         />

//         <div className="text-right">
//           <Button  className="button dark" >
//             Save
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default CreateTaskForm;
