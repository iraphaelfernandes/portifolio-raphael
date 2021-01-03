import React from 'react'
import {ListGroup, Image} from 'react-bootstrap';
import LinkButton from './LinkButton'


const LinkList = () => {
  
  const links = [
    
    'https://github.com/raphafern',
    
    
  ];
  
  
  
  return (
    
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
        <Image alt="logo"
        with="120"
        height="150" 
        src={`${process.env.PUBLIC_URL}/perfil-Raphael.jpeg`}
        className="mb-4"
        rounded/>
        <h5>raphael</h5>
        
        {links.map((link)=>(
          
          <LinkButton key={link} link={link}/>

        ))}
      </div>
    </ListGroup>
    
  )
}

export default LinkList
