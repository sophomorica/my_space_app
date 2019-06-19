import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {Divider, Card, Image, Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

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
    <Card>
      <Card.Header>
    {console.log(profile)}
        
      </Card.Header>
    </Card>
    </>
  )
}
export default Profile