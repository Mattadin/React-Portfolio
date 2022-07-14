import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio-image-1.png';
import IMG2 from '../../assets/portfolio-image-2.png';
import IMG3 from '../../assets/portfolio-image-3.png';
import IMG4 from '../../assets/portfolio-image-4.png';
import IMG5 from '../../assets/portfolio-image-5.PNG';
import IMG6 from '../../assets/portfolio-image-6.PNG';
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dark Crawler Board Game',
    github: 'https://github.com/Mattadin/dark-crawler',
    demo: 'https://dark-crawler.herokuapp.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Weather Forecaster App',
    github: 'https://github.com/Mattadin/Weather-Forecaster',
    demo: 'https://mattadin.github.io/Weather-Forecaster/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'GIPHY GAME',
    github: 'https://github.com/Mattadin/Group-F-Project-1-GIPHY-Guessing-Game',
    demo: 'https://wilgru.github.io/Group-F-Project-1-GIPHY-Guessing-Game/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Coding Quiz!',
    github: 'https://github.com/Mattadin/Coding-Quiz',
    demo: 'https://mattadin.github.io/Coding-Quiz/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Password Generator',
    github: 'https://github.com/Mattadin/Password-Generator',
    demo: 'https://mattadin.github.io/Password-Generator/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Day Planner',
    github: 'https://github.com/Mattadin/Day-Planner',
    demo: 'https://mattadin.github.io/Day-Planner/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  rel="noreferrer"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  rel="noreferrer"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
