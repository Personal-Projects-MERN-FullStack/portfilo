import React from "react";
import "./About.css";
import Image from "../../components/home/me.png";
import Resume from "../../assets/resume2.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello, my name is Vaibhav Mohanalkar. I am a recent graduate with
              a Bachelor's degree in Computer Application and a strong passion
              for web development. Currently residing in Latur, Maharashtra,
              India, <br/><br></br>
              I am a MERN Stack Developer with expertise in JavaScript,
              React, and Node.js. Throughout my academic journey, I have
              completed various web development projects, gaining a solid
              understanding of web development principles and best practices. <br></br> <br></br> I
              possess proficiency in HTML, CSS, and JavaScript and have
              experience working with the MERN stack, including MongoDB,
              Express.js, React, and Node.js. As a quick learner, I constantly
              strive to enhance my skills and keep up with the latest trends in
              web development.
              <br></br><br></br> I am enthusiastic about starting my career as a
              web developer and eagerly look forward to working on challenging
              projects that will facilitate my growth in this field. For further
              information, you can refer to my personal website, portfolio, and
              GitHub account.
            </p>
            <ul className="about__list">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React Js</li>
              <li>Bootstrap & Tailwind CSS</li>
              <li>Node Js</li>
              <li>Express JS</li>
              <li>MongoDB</li>
              <li>API integration</li>
            </ul>
            <button class="blob-btn" onClick={downloadResume}>
              Donwload CV
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};
export default About;
