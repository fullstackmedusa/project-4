import './Home.css';
import { useNavigate, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Home() {
    const navigate = useNavigate()
  
    const addGroup = () => {
      navigate('/create/group')
    }
  
    return (
      <div className="home">
        <div className="home__container">
          <img src="https://i.imgur.com/HzvulAD.jpg" alt="Home Manager Logo" />
          <h1>Welcome to Home Manager</h1>
          <p>
            Keep your household in the loop with Home Manager
          </p>
  
          <p>
            Our aim is to make your life simpler, more organized and more
            productive.
          </p>
  
          <Button onClick={addGroup}>Create Group</Button>
        </div>
      </div>
    )
  }
  
  export default Home