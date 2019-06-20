import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {Divider, Card, Image, Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import MyProfiles from './MyProfiles';

const Profile =(props)=>{
  const [profile, setProfile] = useState({})
  
  useEffect(()=>{
    const {id } =props.match.params
    axios.get(`/api/profiles/${id}`)
    .then(res=>{
      debugger
        setProfile(res.data)
       
      })
  },[])
 

 

  return(
    <>
          <Card>
        <Card.Header>
          {profile.name}
        </Card.Header>
      </Card>
    </>
  )
}
export default Profile