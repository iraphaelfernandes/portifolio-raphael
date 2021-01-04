import React from 'react'
import {Button, Card} from 'react-bootstrap'
import { Icon, InlineIcon } from '@iconify/react';
import githubOctocat from '@iconify-icons/logos/github-octocat';


const ProjectCard = (props) => {


  return (
    
    <Card className="col-12 col-md-6 col-lg-3 mx-3 my-3">
    
      <Card.Body>
      
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.languages}</Card.Text>
      
      </Card.Body>
      
      <div className="d-flex flex-row justify-content-lg-around mb-3">
      
        <Button variant="outline-primery">
          <Icon icon={githubOctocat} href={props.github}/>
        </Button>
        
        {props.url != '' &&  <Button variant="outline-success" href={props.url}>It's live</Button>}
      </div>
    
    </Card>
  )
}

export default ProjectCard
