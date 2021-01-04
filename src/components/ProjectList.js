import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectList = () => {
  
  const projects = [

    { 
      name: 'Site Latic',
      url: 'http://www.latic.uerj.br/',
      github:'https://github.com/raphafern/sitelatic',
      languages:'HTML, CSS, JavaScript',
      description:''
    }, 
    { 
      name: 'CRUD NODEJS',
      url: '',
      github:'https://github.com/raphafern/pac_crud',
      languages:'NodeJS',
      description:''
    }
  ]

  return (
    <div className="py-3 d-flex flex-column justify-content-center align-items-center align-content-center">
      <h2 style={{ color: 'white' }}>What I've worked on...</h2>
      <div className="container ">
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              url={project.url}
              name={project.name}
              github={project.github}
              languages={project.languages}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectList
