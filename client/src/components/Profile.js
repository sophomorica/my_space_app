import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import {Divider, Card, Image, Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Profile =(props)=>{
  const [profile, setProfile] = useState([])
  useEffect(()=>{
    axios.get('/api/profiles')

    .then(res=>{
      setProfile(res.data)
    })
    console.log(props)
  },[])
  
  return(
    <>
    <Card>
      <Card.Header>
        Hello
      </Card.Header>
    </Card>
    </>
  )
}
export default Profile