import React from 'react'
import {Header} from 'semantic-ui-react'
import {Link } from 'react-router-dom'

const NoMatch = () =>(
  <>
    <Header as='h1' textAlign="center">404 Page not Found
    Return: <Link to = '/'>Home</Link></Header>
  </>
)

export default NoMatch