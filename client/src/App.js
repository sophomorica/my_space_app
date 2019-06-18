import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import Navbar from './static/Navbar'
import Home from './static/Home'
import About from './static/About'
import NoMatch from './static/NoMatch'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/about' component = {About}/>
        <Route exact path = '/login' component = {Login}/>
        <Route exact path = '/register' component = {Register}/>
        <Route component = {NoMatch}/>
      </Switch>
    </Container>
    </>
    
  );
}

export default App;
