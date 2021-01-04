import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectList = () => {
  
  const projects = [

    { 
      name: 'CRUD NODEJS',
      url: 'SDBA',
      github:'ASFAS',
      languages:'asdfas',
      description:'sdff'
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
