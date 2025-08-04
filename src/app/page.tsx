/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRef } from "react";

//import { usePathname } from "next/navigation";

export default function Home() {
  const [greaterThanSign, setGreaterThanSign] = useState("＞");
  //so i can copy and paste the greater than symbolnon my about paragraph
  const targetRef = useRef<HTMLDivElement | null>(null);
  //telling typescript what type im expecting out of useRef
  //const [projectRef, setProjectRef] = useState('')

  const scrollToElement = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  type SpanStyle = {
    color: string;
  };

  const spanColour: SpanStyle = {
    color: "#4169e1",
  };

  return (
    <>
      <div className="home-container">
        <h2>Hello, I am Branell. This is my portfolio.</h2>
        <h1>
          Front End <span style={spanColour}>developer</span>
        </h1>
        <button onClick={scrollToElement}>View my work</button>
      </div>

      <div className="about-container" ref={targetRef}>
        <h1>About</h1>

        <div className="about-icons">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="green"></div>
        </div>

        <div className="about-me">
          <p>
            {greaterThanSign}Branell.location <br />
            'Elche, Spain'
          </p>

          <p>
            {greaterThanSign}Branell.contact <br /> ['
            <a
              href="mailto:branellk@gmail.com?subject=Hello&body=I'd love to connect!"
              target="_blank"
              rel="noopener noreferrer"
            >
              branellk@gmail.com
            </a>
            ' , '<Link href="https://github.com/BranellKaunda">github</Link>', '
            <Link href="https://www.instagram.com/braneldo">instagram</Link>']
          </p>

          <p>
            {greaterThanSign}Branell.interests <br />
            ['football', 'piano', 'working out', 'video games']
          </p>

          <p className="typing-symbol">{greaterThanSign}</p>
        </div>
      </div>

      <div className="technologies-header">
        <h1>Technologies</h1>
      </div>

      <div className="technologies-container">
        <div className="technologies-1">
          <div className="tech-wrapper">
            <h2>React</h2>

            <div className="img-div">
              <Image
                src="/images/react-logo.png"
                alt="react logo"
                priority={true}
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="plus-1">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-2">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-3">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-4">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="technologies-2">
          <div className="tech-wrapper">
            <h2>Nextjs</h2>

            <div className="img-div">
              <Image
                src="/images/nextjs.png"
                alt="react logo"
                priority={true}
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="plus-1">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-2">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-3">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-4">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="technologies-3">
          <div className="tech-wrapper">
            <h2>Typescript</h2>

            <div className="img-div">
              <Image
                src="/images/typescript.png"
                alt="react logo"
                priority={true}
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="plus-1">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-2">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-3">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-4">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="technologies-4">
          <div className="tech-wrapper">
            <h2>Tailwind CSS</h2>

            <div className="img-div">
              <Image
                src="/images/tailwindcss.png"
                alt="react logo"
                priority={true}
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="plus-1">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-2">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-3">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-4">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="technologies-5">
          <div className="tech-wrapper">
            <h2>Git</h2>

            <div className="img-div">
              <Image
                src="/images/git.png"
                alt="react logo"
                priority={true}
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="plus-1">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-2">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-3">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="plus-4">
            <Image
              src="/images/plus.png"
              alt="instagram icon"
              priority={true}
              width={22}
              height={22}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div id="projects-header">
        <h1>Projects</h1>
      </div>

      <div className="projects-container">
        <div className="project">
          <div className="project-info">
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
              <a href="">source code</a>
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
}
