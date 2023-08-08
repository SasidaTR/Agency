import React from 'react';
import { useParams } from 'react-router-dom';
import studyCases from '../data/Projects.json';
import ReactMarkdown from 'react-markdown';

const StudyCase = () => {
  const { titleSearched } = useParams();
  const selectedStudyCase = studyCases.find((studyCase) => studyCase.title === titleSearched);

  if (!selectedStudyCase) {
    return <div>Étude de cas introuvable.</div>;
  }

  const { title, content } = selectedStudyCase;

  return (
    <div className='base'>
      <h1>{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default StudyCase;
