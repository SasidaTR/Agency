import ReactMarkdown from 'react-markdown';

const About = () => {
  return(
  <div className='base'>
    <h1>About</h1>
    <p><ReactMarkdown>### Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.

De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.</ReactMarkdown></p>
  </div>);
};

export default About;