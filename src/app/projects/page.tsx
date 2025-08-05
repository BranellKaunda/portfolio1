/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

const Project = () => {
  return (
    <>
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        <div className="project">
          <div className="project-info ">
            <div className="project-img">
              <img src="/images/bmklogistics.png" alt="" />
            </div>
            <h2>Logistics site</h2>

            <p>
              Created a static landing page for a startup logistics company.
              With google maps intergration as well as email to provide great
              customer service. Made it simple to provide a great user
              experience. Improvements will be made to this website according to
              the company needs.
            </p>

            <p>
              <a href="https://bmklogistics.net/">view website</a>
            </p>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <img src="/images/amazonproject.png" alt="" />
            </div>
            <h2>Amazon</h2>

            <p>
              Simulated the amazon website. This project layed the foundation of
              working with vanilla javascript. Understanding the basics and made
              more curious of the posibilities of DOM manipulation. It made me
              feel in control and wanting to expand my knowledge with
              javascript.
            </p>

            <p>
              <a href="https://github.com/BranellKaunda/Amazon-project">
                source code
              </a>
            </p>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <img src="/images/memory-game.png" alt="" />
            </div>
            <h2>Memory game</h2>

            <p>
              I designed and developed an interactive memory game using React to
              showcase dynamic state management and smooth UI transitions. It
              demonstrates my ability to build engaging front-end applications
              while following modern development practices.
            </p>

            <a href="https://plum-dotterel-668941.hostingersite.com/">
              view game
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <img src="/images/movieapp.png" alt="" />
            </div>
            <h2>Movie app</h2>

            <p>
              Using The Movie Database (TMDB) API, i fetched hundreds of movies
              and provide great user experince to anyone seeking to find any
              movies. I used tailwindcss for styling and appwrite database for
              my trending movies feature as my focus is on front end
              development.
            </p>

            <p>
              <a href="https://lime-zebra-910052.hostingersite.com/">
                View App
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
