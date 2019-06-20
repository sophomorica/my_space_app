import React, {useEffect, useState, } from 'react'
import axios from 'axios'
import {Divider, Card, Image, } from 'semantic-ui-react'

const Profile =(props)=>{
  const [profile, setProfile] = useState({})
  
  useEffect(()=>{
    const {id } =props.match.params
    axios.get(`/api/profiles/${id}`)
    .then(res=>{
        setProfile(res.data)
      })
  },[])
 

 

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
            <Card.Content>
        
            </Card.Content>
          </Card>
    </>
  )
}
export default Profile