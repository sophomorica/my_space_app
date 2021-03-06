import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import Navbar from './static/Navbar'
import Home from './static/Home'
import About from './static/About'
import NoMatch from './static/NoMatch'
import Login from './components/Login'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import MyProfiles from './components/MyProfiles'
import Profile from './components/Profile'
import PostForm from './components/PostForm'
import { initMiddleware} from "devise-axios"


function App() {
  initMiddleware()
  return (
    <>
    <Navbar/>
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <ProtectedRoute exact path = '/my-profiles' component = {MyProfiles}/>
          <Route exact path = '/profiles/:id' component = {Profile}/>
          <Route exact path = '/profiles/profile_id/posts/:id' component = {PostForm}/>
          <Route exact path = '/about' component = {About}/>
          <Route exact path = '/login' component = {Login}/>
          <Route exact path = '/register' component = {Register}/>
          <Route component = {NoMatch}/>
        </Switch>
      </Container>
    </FetchUser>
    </>
    
  );
}

export default App;
