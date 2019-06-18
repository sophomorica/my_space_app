import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

const Login = (props) =>{
  const emptyForm ={
    email: "",
    password: "", 
    passwordconfirmation:"",
  }
  const [form, setForm] = useState(emptyForm)
  const {handleLogin,} = useContext(AuthContext)

  
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