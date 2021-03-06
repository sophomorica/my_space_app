import React, {useState, useContext}from 'react';
import { AuthContext, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

const Register = (props) =>{
  const emptyForm ={
    email: "",
    password: "", 
    passwordConfirmation:"",
  }
  const [form, setForm] = useState(emptyForm)
  const {handleRegister,} = useContext(AuthContext)

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = form.email
    const password = form.password
    const passwordConfirmation = form.passwordConfirmation
    if(password === passwordConfirmation){
      handleRegister({email, password, passwordConfirmation}, props.history)
    }
    else alert('Passwords Do Not Match!')
  }


  const handleChange = (name) => (e) => {
    // const { value, } = e.target;
    setForm({...form, [name]: e.target.value})
  }
  // const handleChange = (e, {name, value}) =>this.setState({[name]:value})

  return(
    <Segment basic>
      <Header as='h1' textAlign='center'>Register</Header>
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
         <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={form.passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={handleChange('passwordConfirmation')}
          />
        <Segment textAlign='center' basic>
          <Button primary type='submit'>Submit</Button>
        </Segment>
      </Form>
    </Segment>
  )

}
export default Register