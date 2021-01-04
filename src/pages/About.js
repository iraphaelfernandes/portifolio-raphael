import React from 'react'
import {ListGroup, Button, Image} from 'react-bootstrap'
import '../components/WidthLimit.scss'

const About = () => {
  return (
    
    <ListGroup>
      <div className="mx-lg-5 mr-3ml-3 mb-5 d-flex flex-column align-items-center text-center">
      <Image alt="logo"
        with="120"
        height="150" 
        src={`${process.env.PUBLIC_URL}/perfil-Raphael.jpeg`}
        className="mb-4 img-linklist"
        rounded
        />
        <h4><strong>About me..</strong></h4>
        
        <h5>
        I am...
        </h5>
        
        <Button 
        variant="outline-light" 
        href={`${process.env.PUBLIC_URL}`}
        size="lg"
        download
        >
        My Resume
        </Button>

      </div>
    </ListGroup>
  )
}

export default About
