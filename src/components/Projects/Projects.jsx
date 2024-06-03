import styles from './Projects.module.css';
import timeFliesImage from '../../assets/projectPhotos/timeFlies.jpg';
import webapps2024Image from '../../assets/projectPhotos/webapps2024.png';
import jammmingImage from '../../assets/projectPhotos/jammming.png';
import ravenousImage from '../../assets/projectPhotos/ravenous.jpg';
import timeFliesReport from '../../assets/projectPhotos/timeFliesReport.pdf';
import arrow from '../../assets/icons/arrow-right-top.svg'
import { forwardRef } from 'react';

const projects = [
    {
        title: "Time Flies",
        description: "Understanding the methods of how the human mind experiences time passing is at the forefront of psychology and neuroscience research. Dr. Warrick Roseboom and his colleagues at Time Storm have a working AI model, Time Without Clocks, that can accurately predict subjective time from video stimuli. The goal of this project is to make a web-based tool for researchers to utilize the Time Storm model in a user-friendly and efficient manner. To achieve this, I was tasked with creating a modern front-end web application that can interact with the model, a scalable back-end that stores user’s videos, information, and hosts the AI model, and finally, updating and fine-tuning the AI model to be more modern and efficient.",
        image: timeFliesImage,
        link: "https://github.com/Bojackson123/Time-Flies-Frontend",
        pdfLink: timeFliesReport
    },
    {
        title: "Digital Wallet",
        description: "Digital Wallet mimics the functionality of a PayPal-style web application. Users can register, send, receive, and request money from other users, and change their currency with a stand-alone RESTful API service. Digital Wallet has a real-time notification system that notifies the user when a transaction has been made. Super users have access to an admin panel that displays every user on the site as well as their balances and transactions. The admin panel can also create new super users, promote normal users to admin, and revoke their access. Digital Wallet was created using the Django framework following best practices with the Model-View-Template paradigm.",
        image: webapps2024Image,
        link: "https://github.com/Bojackson123/webapps2024"
    },
    {
        title: "Jammming",
        description: "Jammming is a simple single-page web application that allows users to connect their Spotify accounts and create and save playlists. This web application was created using React with a focus on practicing React patterns, API integrations, and CSS styling. Some skills used in this site include: Grid/Flexbox, API Classes, React component patterns, prop passing, and best practices in state management.",
        image: jammmingImage,
        link: "https://jammming-sounds.vercel.app/"
    },
    {
        title: "Ravenous",
        description: "Ravenous is a simple single-page web application that uses Yelps API to allow users to find restaurants with their favorite foods by location. This web application was created using React with a focus on practicing React patterns, API integrations, and CSS styling. Some skills used in this site include Grid/Flexbox, API classes, React component patterns, prop passing, and best practices in state management.",
        image: ravenousImage,
        link: "https://ravenous-wheat.vercel.app/"
    },
    
];

const Projects = forwardRef((props, ref) => {

    

    return (
        <div className={styles.projectsContainer} ref={ref}>
            <h1>My Projects</h1>
          {projects.map((project, index) => (
            <div key={index} className={`${index % 2 === 0 ? styles.imageLeft : styles.imageRight}`}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage}
                />
              </a>
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
});

Projects.displayName = 'Projects';

export default Projects;