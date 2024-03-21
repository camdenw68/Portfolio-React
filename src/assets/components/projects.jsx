import PropTypes from 'prop-types'; // Import PropTypes
import './projects.css'; // Import the CSS file
import img1 from './imgs/notetaker.png'
import img2 from './imgs/5dayweather.png'
import img3 from './imgs/quizapp.png'
import img4 from './imgs/techblog.png'
import img5 from './imgs/pwa.png'
function Projects() {
  // Define your projects data
  const projects = [
    {
      title: '5 Day Weather App',
      description: 'a simple website where you can search for a city and see current weather, and the next 5 day forecast for that city.',
      image: img2,
      githubLink: 'https://github.com/camdenw68/5-day-weather-app',
      deployLink: 'https://camdenw68.github.io/5-day-weather-app/',
    },
    {
      title: 'Note Taker',
      description: 'use express.js to create a site where a user can take notes and save them using express and the server.',
      image: img1,
      githubLink: 'https://github.com/camdenw68/Note-Taker',
      deployLink: 'https://obscure-lowlands-04677-358d629a49b3.herokuapp.com',
    },
    {
      title: 'JavaScript Quiz',
      description: 'A Simple quiz app using JavaScript with a timer, where if an incorrect answer is selected the timer subtracts 10 seconds.',
      image: img3,
      githubLink: 'https://github.com/camdenw68/redo-quiz',
      deployLink: 'https://camdenw68.github.io/redo-quiz/',
    },
    {
      title: 'TechBlog',
      description: 'A fullstack app where a user can signup, login, and create a blog where other useres can leave comments.',
      image: img4,
      githubLink: 'https://github.com/camdenw68/TechBlog',
      deployLink: 'https://still-headland-13907-01c73e86ac5c.herokuapp.com/',
    },
    {
      title: 'PWA Text editor',
      description: 'A Simple code text editor',
      image: img5,
      githubLink: 'https://github.com/camdenw68/PWA',
      deployLink: 'https://camdenw68.github.io/redo-quiz/',
    },
    {
      title: 'CrypTalk',
      description: 'A fullstack react app where a user can create a blog about crypto, and see the latest crypto news',
      image: img3,
      githubLink: 'https://github.com/Wruqe/CrypTalk',
      deployLink: 'https://camdenw68.github.io/redo-quiz/',
    },
  
  ];

  // Project component
  const Project = ({ title, description, image, githubLink, deployLink }) => {
    return (
        <>
        <div className="project-container">
            <img src={image} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-links">
                <a href={githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href={deployLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    Deployed Project
                </a>
            </div>
        </div></>
    );
  };

  // Prop types validation for Project component
  Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    deployLink: PropTypes.string.isRequired,
  };

  // Render projects
  return (
    <div>
        <h2 className='projectheader'>My Projects:</h2>
    <div className="projects-section">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          githubLink={project.githubLink}
          deployLink={project.deployLink}
        />
      ))}
    </div>
    </div>
  );
}

export default Projects;
