import React, {useState, useContext} from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

const Login = (props) =>{
  const {email, setEmail} = useState("")
  const {password, setPassword} = useState("")
  const {auth, authenticated, handleLogin, handleRegister, handleLogout, setUser} = useContext(AccountContext)

  handleSubmit = (e) => {
    e.preventDefault()
    // const { email, password } = this.state 
    // const { auth } = this.props 
    //this.props.auth.handleLogin
    auth.handleLogin({email, password }, props.history)
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    setEmail({ [name]: value, });
    setPassword({ [name]: value, });
  }
  return(
    <Segment basic>
      <Header as='h1' textAlign='center'>Login</Header>
      <Form onSubmit={()=>handleSubmit()}>
        <Form.Input
          label="Email"
          autoFocus
          required         
          name='email'
          value={email}
          placeholder='Email'
          onChange={()=>handleChange()}
        />
        <Form.Input
          label="Password"
          required
          name='password'
          value={password}
          placeholder='Password'
          type='password'
          onChange={()=>handleChange()}
        />
        <Segment textAlign='center' basic>
          <Button primary type='submit'>Submit</Button>
        </Segment>
      </Form>
    </Segment>
  )

}