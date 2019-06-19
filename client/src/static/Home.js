import React, {useState, useEffect} from 'react'
import {Header} from 'semantic-ui-react'
import axios from 'axios';

const Home = () =>{

  const [profiles, setProfiles] = useState([])

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
    <Card.Group itemsPerRow={4}>
        {this.state.profiles.map(p=>
          <Card key = {p.id}>
            <Image src = {p.avatar}/>
            <Card.Content>
              <Divider/>
              <Card.Header>
                {p.name}
              </Card.Header>
            </Card.Content>
          </Card>
          )}
      </Card.Group>
  </div>
    )

}

export default Home