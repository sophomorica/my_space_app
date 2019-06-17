import React, {useState, useContext} from 'react';
import { AuthConsumer, AuthContext } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';
import axios from 'axios'

const Login = (props) =>{
  const emptyForm ={
    email: "",
    password: "", 
  }
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [form, setForm] = useState(emptyForm)
  const {handleLogin, authenticated, user, handleRegister, handleLogout, setUser} = useContext(AuthContext)
  // const handleLogin = (user, history)=>{
  //   axios.post("/api/auth/sign_in", user)
  //   .then(res=>{
  //     setUser(res.data.data)
  //     history.push('/')
  //   })
  //   .catch(err =>{
  //     console.log(err)
  //   })
  // }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin({...form}, props.history)
  }

  const handleChange = (name) => (e) => {
    // const { value, } = e.target;
    setForm({...form, [name]: e.target.value})
    
  }
  // const handleChange = (e, {name, value}) =>this.setState({[name]:value})

  return(
    <Segment basic>
      <Header as='h1' textAlign='center'>Login</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          autoFocus
          name='email'
          required         
          value={form.email}
          placeholder='Email'
          onChange={handleChange('email')}
        />
        <Form.Input
          label="Password"
          required
          name='password'
          value={form.password}
          placeholder='Password'
          type='password'
          onChange={handleChange('password')}
        />
        <Segment textAlign='center' basic>
          <Button primary type='submit'>Submit</Button>
        </Segment>
      </Form>
    </Segment>
  )

}
export default Login