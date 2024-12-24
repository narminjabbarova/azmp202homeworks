import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/218/469/non_2x/portrait-of-a-beautiful-young-woman-with-short-wavy-hair-vector.jpg" 
          alt="Narmin"
          className={styles.profileImage}
        />
        <h1 className={styles.title}>
          I'm <span className={styles.highlight}>Narmin Jabbarova</span>, frontend
          developer.
        </h1>
        <p className={styles.description}>
          I am a frontend developer from Baku, Azerbaijan with 5 years of
          experience in <br />multiple companies like Microsoft, Tesla, and Apple.
        </p>
        <div className={styles.buttons}>
          <button className={styles.connectButton}>Connect with me</button>
          <button className={styles.resumeButton}>My resume</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
