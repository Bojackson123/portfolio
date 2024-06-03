import styles from './Projects.module.css';
import timeFliesImage from '../../assets/projectPhotos/timeFlies.jpg';
import webapps2024Image from '../../assets/projectPhotos/webapps2024.png';
import jammmingImage from '../../assets/projectPhotos/jammming.png';
import ravenousImage from '../../assets/projectPhotos/ravenous.jpg';
import timeFliesReport from '../../assets/projectPhotos/timeFliesReport.pdf';
import arrow from '../../assets/icons/arrow-right-top.svg'

const projects = [
    {
        title: "Time Flies",
        description: "Understanding the methods of how the human mind experiences time passing is at the forefront of psychology and neuroscience research. Dr. Warrick Roseboom and his colleagues at Time Storm have a working AI model, Time Without Clocks, that can accurately predict subjective time from video stimuli. The goal of this goal is to make a web-based tool for researchers to utilize the Time Storm model in a user-friendly and efficient manner. To achieve this, I was tasked with creating a modern front-end web application that can interact with the model, a scalable back-end that stores user’s videos, information, and hosts the AI model, and finally, updating and fine-tuning the AI model to be more modern and efficient.",
        image: timeFliesImage,
        link: "https://github.com/Bojackson123/Time-Flies-Frontend",
        pdfLink: timeFliesReport
    },
    {
        title: "Digital Wallet",
        description: "This is a description of Project 2.",
        image: webapps2024Image,
        link: "https://github.com/Bojackson123/webapps2024"
    },
    {
        title: "Jammming",
        description: "This is a description of Project 3. ",
        image: jammmingImage,
        link: "https://jammming-sounds.vercel.app/"
    },
    {
        title: "Ravenous",
        description: "This is a description of Project 4.",
        image: ravenousImage,
        link: "https://ravenous-wheat.vercel.app/"
    },
    
];

function Projects() {

    

    return (
        <div className={styles.projectsContainer}>
            <h1>My Projects</h1>
          {projects.map((project, index) => (
            <div key={index} className={`${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage}
              />
            <div className={styles.projectInfo}>
                <div>
                    <h2>{project.title}</h2>
                    <p>
                        {project.description}&nbsp;
                        {index === 0 && 
                        <a href={project.pdfLink} target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>}
                    </p>
                </div>
                <div className={`${index % 2 === 0 ? styles.arrowContainerLeft : styles.arrowContainerRight}`}>
                <a href={project.link} target='_blank'>
                    <img src={arrow} alt="arrow" className={styles.arrow} />
                </a>
                </div>
            </div>
            </div>
          ))}
        </div>
      );
}


export default Projects;