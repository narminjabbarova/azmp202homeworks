import React from 'react'
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          About <span>me</span>
        </h2>
        <div className={styles.content}>
          <p>I am a passionate Junior Front-End Developer with a solid foundation in HTML, CSS, and JavaScript, focused on crafting responsive, user-friendly web interfaces. My journey into front-end development has been fueled by a deep interest in turning ideas into interactive and engaging digital experiences. Over time, I have developed strong skills ibuilding clean, structured, and visually appealinwebsites. Earning certifications like thInformation Technology Specialist in HTML and CShas further reinforced my expertise and dedicatioto continuous learning.</p>
          <p>
          I believe in writing clean, efficient code and continuously exploring new technologies to improve my craft. Currently, I am enhancing my skills in modern frameworks such as React.js to stay aligned with industry trends and deliver high-quality solutions.
          Key Skills
          HTML5 & CSS,
          JavaScript, 
          (ES6+),
          Responsive Web Design,
          Continuous Learning & Team Collaboration
          I am always open to connecting with like-mindedprofessionals and exploring opportunities to grow as a developer. Let’s connect to share ideas, experiences, and innovative solutions in web development!
          </p>
          <div className={styles.stats}>
            <div>
              <h3 className={styles.highlight}>2+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3 className={styles.highlight}>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3 className={styles.highlight}>10+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About