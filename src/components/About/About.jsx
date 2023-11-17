import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h2>About Page</h2>
      {state && state.user && (
        <div className="content">
          <img src="" alt="" />
          <h6>{state.user.name}</h6>
          <p>{state.user.mail}</p>
          <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
      )}
    </div>
  );
};

export default About;
