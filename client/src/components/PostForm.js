import React from 'react'
import {Form, Container, Button, Input, } from 'semantic-ui-react'
import axios from 'axios'
import {useFormInput} from '../hooks/useFormInput'

const PostForm = (props) =>{

//  useEffect(()=>{
//     debugger
//    const {id } = props.match.params
//  }, [])

//  const handleChange = (name) => (e) =>{
//    setBody({[name]:e.target.value})
//  }

  const body = useFormInput("")

 const handleSubmit = (e) =>{
  const {id } = props.match.params
   e.preventDefault()
   axios.post(`/api/profiles/${id}/posts`, {body: body.value})
   .then(res=>{
     props.add(res.data)
     props.toggleForm()
   })
 }
 return(
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input 
      name='body'
      placeholder = 'Post...'
      required
      {...body}
      />
      <Button color = 'green' style={{marginTop: "30px"}}>Submit</Button>
    </Form>
  </Container>
 )
 
}
export default PostForm