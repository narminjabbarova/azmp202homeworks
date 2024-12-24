import React from "react";
import styles from "./Services.module.scss";

const Services = () => {
  const services = [
    { id: 1, title: "Front-End Development", description: "Web development is the process of building, programming...", link: "Read More" },
    { id: 2, title: "Game Design", description: "Web development is the process of building, programming...", link: "Read More" },
    { id: 3, title: "Logo Design", description: "Web development is the process of building, programming...", link: "Read More" },
    { id: 4, title: "Social Media", description: "Web development is the process of building, programming...", link: "Read More" },
    { id: 5, title: "Graphic Design", description: "Web development is the process of building, programming...", link: "Read More" },
    { id: 6, title: "Content Writing", description: "Web development is the process of building, programming...", link: "Read More" },
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          My <span>Services</span>
        </h2>
        <div className={styles.cards}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className={styles.link}>
                {service.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
