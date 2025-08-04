/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
//import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const About = () => {
  const [greaterThanSign, setGreaterThanSign] = useState("＞");
  return (
    <>
      <div className="about-container">
        <h1>About</h1>

        <div className="about-icons">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="green"></div>
        </div>

        <div className="about-me">
          <p className="smaller">
            {greaterThanSign}Branell.location <br />
            'Elche, Spain'
          </p>

          <p className="smaller">
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

          <p className="smaller">
            {greaterThanSign}Branell.interests <br />
            ['football', 'piano', 'working out', 'video games']
          </p>

          <p className="smaller">
            {greaterThanSign}I am self taught web developer based in Spain. I
            got introduced to programming through an online marketing course
            -odd, i know. In this course we had create a website and advertise a
            particular product. But heres the catch, we had to pay for the
            website so we were not really bulding it ourselves. Thats when i did
            my research and got introduced to the world of programming to build
            a website and i havent looked back since.
          </p>

          <p className="smaller">
            {greaterThanSign}One `hello world` is all it took to know that it
            something i want to do. I devoted my time to learn everything i can
            about web development, and thats one of the reasons i enjoy it...you
            never stop learning. I took a Javacript course which was not easy
            but eventually everything started to click. React was the cherry on
            top. It opened up alot of possibilies when working with Javacript.
            Tailwind is cool but plain CSS made me feel more fulfilled and
            allowed me to be more creative in my work.
          </p>

          <p className="smaller">
            {greaterThanSign}My goal is to learn something new everyday. Weather
            it is finding out ::after pseudo element in css or debouncing in
            react. The beauty is the journey not the destination.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
