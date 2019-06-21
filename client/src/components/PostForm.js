import React, {useState, useEffect} from 'react'
import {Form, Container, Button, Input, } from 'semantic-ui-react'
import axios from 'axios'

const PostForm = (props) =>{
 const [body, setBody] = useState("")

 useEffect(()=>{
    debugger
   const {id } = props.match.params
 }, [])

 const handleChange = (name) => (e) =>{
   setBody({[name]: e.target.value})
 }

//  const handleSubmit = (e) =>{
//    e.preventDefault()
//    axios.post(`/api/profiles/${id}/posts/${p.id}`)
//  }
 return(
  <Container>
    <Form >
      <Input 
      name='body'
      placeholder = 'Post...'
      value={body}
      onChange={handleChange('body')}
      required
      />
      <Button color = 'green' style={{marginTop: "30px"}}>Submit</Button>
    </Form>
  </Container>
 )
 
}
export default PostForm