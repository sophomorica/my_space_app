import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Divider, Card, Image, Button, Icon } from 'semantic-ui-react'

const MyProfiles = (props) =>{
  const [profiles, setProfiles] = useState([])

  useEffect(()=>{
    axios.get('/api/my_profiles')
    .then(res => setProfiles(res.data))
  }, [])
  const downVote = (id) =>{
    setProfiles(profiles.filter(p => p.id !== id))
  }
  return(
    <Card.Group itemsPerRow={4}>
        {profiles.map(p=>
          <Card key = {p.id}>
            <Image src = {p.avatar}/>
            <Card.Content>
              <Divider/>
              <Card.Header>
                {p.name}
              </Card.Header>
              <Card.Description>{p.about}</Card.Description>
              <Card.Meta>{p.email}</Card.Meta>
            </Card.Content>
            <Card.Content>
            <Button onClick={()=> downVote(p.id)} color='red' icon basic>
            <Icon name='thumbs down'/>
          </Button>
            </Card.Content>
          </Card>
          )}
      </Card.Group>
  )
}


export default MyProfiles