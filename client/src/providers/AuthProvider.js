import React from 'react'
import axios from 'axios'
// Create context consumer and provider 
// create context put into a variable

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

export class AuthProvider extends React.Component{
  state = { user: null, }
  // this is where we want the functions for axios calls so that we can update state 

  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
    .then( res =>{
      this.setState({user: res.data.data})
      history.push("/")
    })
    .catch(err=>{
      console.log(err)
    })
    
  }
  handleRegister = (user, history) => {
    axios.post("/api/auth",user)
    .then( res =>{
      this.setState({user: res.data.data})
      history.push("/")
    })
    .catch(err =>{
      console.log(err)
    })
  }
  
  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
    .then( res =>{
      this.setState({user: null, })
      history.push('/login')
    })
    .catch( err =>{
      console.log(err)
    })
  }



  render(){
    const { user, } = this.state
    return(
      <AuthContext.Provider value={{
        user, 
        authenticated: user !== null, 
        handleLogin: this.handleLogin, 
        handleRegister: this.handleRegister,
        handleLogout: this.handleLogout, 
        setUser: (user)=> this.setState({user}),
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
