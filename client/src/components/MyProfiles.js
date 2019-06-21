import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Divider, Card, Image, Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const MyProfiles = (props) =>{
  const [myProfiles, setMyProfiles] = useState([])

  useEffect(()=>{
    axios.get('/api/my_profiles')
    .then(res => setMyProfiles(res.data))
  }, [])
  const disliked = (id) =>{
    axios.put(`/api/disliked/${id}`)
    .then(res => {
      setMyProfiles(myProfiles.filter(p => p.id !== id))
    })
  }
  return(
    <Card.Group itemsPerRow={4}>
        {myProfiles.map(p=>
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
            <Card.Content style={{display:"flex", justifyContent:"space-between"}}>
              <Button onClick={()=> disliked(p.id)} color='red' icon basic>
                unfriend 
              <Icon name='thumbs down'/>
              </Button>
              <Link to={`profiles/${p.id}`}{...props} key={p.id}>
              <Button>View Profile</Button>
              </Link>
            </Card.Content>
          </Card>
          )}
      </Card.Group>
  )
}


export default MyProfiles