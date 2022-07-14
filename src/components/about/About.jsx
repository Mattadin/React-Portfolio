import React from 'react';
import './about.css';
import aboutMe from '../../assets/about-me-img.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="About img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Coding Bootcamp at USYD</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Teamwork</h5>
              <small>Collaborative project work</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Over 20 completed projects</small>
            </article>
          </div>

          <p>
            I'm Matthew, a graduate from the Coding Bootcamp at University of
            Sydney. My experience is in fullstack web development but my
            passions lie in backend development creating complex models and
            database structures using either MySQL or MongoDB. My aspirations in
            coding are simply to build spaces where users can connect and
            interact.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
