import "./Accordion.css";

const Accordion = ({ title, description, isOpen, handleClick }) => {
  return (
    <>
      <div className="title">
        <span>{title}</span>
        <span onClick={handleClick}>^</span>
      </div>
      {isOpen && (
        <div>
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

export default Accordion;
