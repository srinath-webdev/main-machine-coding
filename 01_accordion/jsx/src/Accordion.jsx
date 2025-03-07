import './Accordion.css';

const Accordion = ({ id, title, info, toggleAccordion, isActive }) => {
  // every time you click on + or - button, we are sending that particular clicked accordion component id to the function (which is in the parent component ex; App.jsx)
  const handleClick = () => {
    //id is part of the data.js
    toggleAccordion(id);
  };

  return (
    <div className='accordion-container'>
      <div className='toggleInfo'>
        <h2>{title}</h2>
        <button
          className='toggleButton'
          onClick={handleClick}
          aria-expanded={isActive}
        >
          {isActive ? '-' : '+'}
        </button>
      </div>
      <div className={`accordion-content ${isActive ? 'open' : ''}`}>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Accordion;
