import React from 'react';
import { Link } from 'react-router-dom';
import studyCases from '../data/Projects.json';
import ReactMarkdown from 'react-markdown';

const Works = () => {
  return (
    <div className='base'>
      <h1>Projets</h1>
      <p>
        <ReactMarkdown>
          ### Au fil des années, nous avons pu accompagner les meilleurs.
          Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
        </ReactMarkdown>
      </p>
      <div className='card-container'>
        {studyCases.map((studyCase) => (
          <div key={studyCase.id} className='card'>
            <Link to={`/works/${studyCase.title}`}>
              {studyCase.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
