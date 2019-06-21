import React, {useEffect, useState, } from 'react'
import axios from 'axios'
import {Divider, Card, Image, Icon, Button } from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
import PostForm from './PostForm'

const Profile =(props)=>{
  const [profile, setProfile] = useState({})
  const [posts, setPosts] = useState([])
  const [showForm, setShowForm] = useState(false)

  
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
    return posts.map(p => (
      <Card.Content key={p.id}>
        <Card.Description>
          {p.body}
        </Card.Description>
        <Card.Meta>
          <Button icon basic color='blue'><Icon name = 'thumbs up'/></Button>

           
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
            <Button  onClick={()=>setShowForm(!showForm)} icon basic color='blue'>{showForm ? "Close Post" : "Add Post"}</Button>
            <br/>
            {showForm && <PostForm {...props}toggleForm={setShowForm} add={(post) =>setPosts([...posts, post])}/>}
            {renderPosts()}
            
          </Card>
    </>
  )
}
export default Profile