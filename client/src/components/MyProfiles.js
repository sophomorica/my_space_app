import React from 'react'
import axios from 'axios'
import {Divider, Card, Image } from 'semantic-ui-react'

class MyProfiles extends React.Component{

  state = {profiles: []}

  componentDidMount(){
    axios.get('/api/my_profiles')
    .then(res => this.setState({profiles: res.data}))
  }
  
  render(){
    return(
      <Card.Group itemsPerRow={4}>
        {this.state.profiles.map(p=>
          <Card key = {p.id}>
            <Image src = {p.avatar}/>
            <Card.Content>
              <Divider/>
              <Card.Header>
                {p.name}
              </Card.Header>
            </Card.Content>
          </Card>
          )}
      </Card.Group>
    )
  }
}

export default MyProfiles