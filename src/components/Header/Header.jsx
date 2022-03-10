import React from 'react';

import { Header, Segment} from 'semantic-ui-react';


export default function PageHeader(){
    return (
        <Segment>
            <Header as='h2' >
              This is the HEADER!
            </Header>
        </Segment>
    )
}




// import React from "react";
// import { Link } from "react-router-dom";
// import { Header, Segment, Image, Icon } from "semantic-ui-react";

// export default function PageHeader({ user, handleLogout }) {
//   console.log(user, 'user in header')

//   return (
//     <Segment clearing>
//       <Header as="h2" floated="left">
//         <Link to="/">
//           <Icon name="home"></Icon>
//         </Link>
//       </Header>
//       <Header as="h3" floated="left">
// 				<div id="greeting">
// 					Hello {user.username}
// 				</div>
// 			</Header>
//       <Header as="h2" floated="right">
//         <Image
//           src={
//             user?.photoUrl
//               ? user.photoUrl
//               : "https://react.semantic-ui.com/images/wireframe/square-image.png"
//           }
//           avatar
//         ></Image>
//         <Link to="" onClick={handleLogout}>
//           <span id="logout">
//             Logout
//           </span>
//         </Link>
//       </Header>
//     </Segment>
//   );
// }
