import React from 'react';
import github_icon from './../assets/github_icon.jpg';
import linkedin_icon from './../assets/linkedin_icon.png';

export const Connect = () => {
  const contactLinks = [
    {
      title: "Github",
      url: "https://github.com/SanhornC",
      icon: github_icon
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sanhorn-chen-898941260/",
      icon: linkedin_icon
    },
    {
      title: "Email",
      url: "mailto:sanhorn2@illinois.edu",
      icon: null // You can add an email icon if you have one
    }
  ];

  return (
    <section className="connect-page" id="connect">
      <div className="container">
        <div className="connect-content">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
          <div className="connect-links">
            {contactLinks.map((link, index) => (
              <a 
                href={link.url} 
                target={link.title === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                key={index}
                className="connect-button"
              >
                {link.icon && <img src={link.icon} alt={link.title} className="connect-icon" />}
                <span>{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};