import styles from './Projects.module.css';
import timeFliesImage from '../../assets/projectPhotos/timeFlies.png';
import webapps2024Image from '../../assets/projectPhotos/webapps2024.png';
import jammmingImage from '../../assets/projectPhotos/jammming.png';
import ravenousImage from '../../assets/projectPhotos/ravenous.png';

const projects = [
    {
        title: "Time Flies",
        description: "This is a description of Project 1. It includes features and technologies used.",
        image: timeFliesImage
    },
    {
        title: "Digital Wallet",
        description: "This is a description of Project 2. It includes features and technologies used.",
        image: webapps2024Image
    },
    {
        title: "Jammming",
        description: "This is a description of Project 3. It includes features and technologies used.",
        image: jammmingImage
    },
    {
        title: "Ravenous",
        description: "This is a description of Project 4. It includes features and technologies used.",
        image: ravenousImage
    },
    
];

function Projects() {

    

    return (
        <div className={styles.projectsContainer}>
            <h1>Projects</h1>
          {projects.map((project, index) => (
            <div key={index} className={`${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage}
              />
            <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
            </div>
          ))}
        </div>
      );
}


export default Projects;