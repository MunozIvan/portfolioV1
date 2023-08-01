import "./Projects.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import alohar from "../../assets/Alohar.PNG"
import countries from "../../assets/countries.PNG"
import contructora from "../../assets/contructora.PNG"



export default function Projects() {

    const [repos, setRepos] = useState([]);


    useEffect(() => {
        // Función para obtener los repositorios de GitHub
        const getReposFromGitHub = async () => {
          try {
            const response = await axios.get('https://api.github.com/users/MunozIvan/repos'); 
            // Filtrar los 3 repositorios específicos por nombre
            const specificRepos = response.data.filter(repo => (
              repo.name === 'pf-grupo12' || repo.name === 'Countries' || repo.name === 'ConstructoraMunoz'
            ));
            setRepos(specificRepos);
          } catch (error) {
            console.error('Error fetching repositories from GitHub:', error);
          }
        };
    
        getReposFromGitHub();
      }, []);


    return (

        <div className="projects">
            <div className="projectsContent">
                <h4 className="projectsTitle">Some Projects</h4>

                <a href="https://github.com/MunozIvan" target="_blank" rel="noopener noreferrer"><span className="projectsMore">See all</span></a>
            </div>

            <div className="projectsImages">

                <div className="projectCard">
                        <a key={repos[2]?.id} href={repos[2]?.html_url} target="_blank" rel="noopener noreferrer" className="projectLink">
                            <img src={ alohar} alt={repos[2]?.name}  className="projectCardImage"/>
                            <h5 className="projectCardName">{repos[2]?.name}</h5>
                        </a>
                </div>

                <div className="projectCard">
                    <a key={repos[1]?.id} href={repos[1]?.html_url} target="_blank" rel="noopener noreferrer" className="projectLink">
                        <img src={countries} alt={repos[1]?.name} className="projectCardImage" />
                        <h5 className="projectCardName">{repos[1]?.name}</h5>
                    </a>
                </div>

                <div className="projectCard">
                    <a key={repos[0]?.id} href={repos[0]?.html_url} target="_blank" rel="noopener noreferrer" className="projectLink">
                        <img src={contructora} alt={repos[0]?.name} className="projectCardImage"/>
                        <h5 className="projectCardName">{repos[0]?.name}</h5>
                    </a>
                </div>

                

                
            </div>

        </div>
        
    );
}