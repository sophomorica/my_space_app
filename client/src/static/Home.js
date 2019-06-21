import React, {useState, useEffect, useContext} from 'react'
import {Header, Card, Image, Divider, Icon, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';

const Home = (props) =>{

  const [profiles, setProfiles] = useState([])
  const user = useContext(AuthContext)

  useEffect(()=>{
    axios.get('/api/profiles')
    .then(res=>setProfiles(res.data))
  },[])
  
  const addProfile = (id) =>{
    axios.put(`/api/profiles/${id}`)
    .then(()=> setProfiles(profiles.filter(p => p.id !== id)))
  }

  return(

    <div>
    <Header as='h1' textAlign="center">My Space</Header>
    {user.user?<Link to ='/my-profiles'>
      <Button color='blue'>
        My Liked Profiles
      </Button>
      </Link> : null}
    
    <Card.Group itemsPerRow={4}>
        {profiles.map(p=>
          <Card key = {p.id}>
            <Image src = {p.avatar}/>
            <Card.Content>
              <Divider/>
              <Card.Header>
                {p.name}
              </Card.Header>
            </Card.Content>
            <Card.Content style={{display:"flex"}}>
              {user.user ? 
                    <Button onClick={()=> addProfile(p.id)}color='green' icon basic><Icon name='thumbs up'/></Button> : 
                  <Link to ='/login'><Button>Log in to add</Button>
                  </Link>
                }
              <Link to={`profiles/${p.id}`}{...props}>
                  <Button color="blue inverted">View Profile</Button>
              </Link>
            </Card.Content>
          </Card>
          )}
      </Card.Group>
      
  </div>
    )

}

export default Home