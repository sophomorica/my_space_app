import React, {useEffect, useState, } from 'react'
import axios from 'axios'
import {Divider, Card, Image, Icon, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Profile =(props)=>{
  const [profile, setProfile] = useState({})
  const [posts, setPosts] = useState([])
  
  useEffect(()=>{
    const {id } = props.match.params
    axios.get(`/api/profiles/${id}`)
    .then(res=>{
        setProfile(res.data)
      })
    axios.get(`/api/profiles/${id}/posts`)
    .then(res => setPosts(res.data))
  },[])

  const renderPosts = () =>{
    const {id } = props.match.params
    return posts.map(p => (
      <Card.Content>
        <Card.Description>
          {p.body}
        </Card.Description>
        <Card.Meta>
          <Button icon basic color='blue'><Icon name = 'thumbs up'/></Button>
          <Link to ={`/profiles/${id}/posts/${p.id}`}>
            <Button icon basic color='blue'><Icon name = 'pencil'/></Button>
          </Link>
        </Card.Meta>
      </Card.Content>
    ))
  }
 

 

  return(
    <>
          <Card key = {profile.id}>
            <Image src = {profile.avatar}/>
            <Card.Content>
              <Divider/>
              <Card.Header>
                {profile.name}
              </Card.Header>
              <Card.Description>{profile.about}</Card.Description>
              <Card.Meta>{profile.email}</Card.Meta>
            </Card.Content>
            {renderPosts()}
            
          </Card>
    </>
  )
}
export default Profile