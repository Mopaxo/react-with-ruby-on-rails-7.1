import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

const ShowAnswer = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      // Puedes agregar lógica adicional aquí si es necesario
      // por ejemplo, cargar la respuesta asociada al ID de la pregunta.
      // Puedes usar una API, un estado global, o cualquier otra fuente de datos.
      // Ejemplo: fetchAnswerById(id).then(response => setAnswer(response));
    }, [id]);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion" id={`accordion${id}`}>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className={`accordion-button ${isOpen ? "" : "collapsed"}`}
              type="button"
              onClick={toggleAccordion}
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${id}`}
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls={`collapse${id}`}
            >
              Show Answer
            </button>
          </h3>
          <div
            id={`collapse${id}`}
            className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
            data-bs-parent={`#accordion${id}`}
          >
            <div className="accordion-body">
              {/* Contenido de la respuesta, puedes colocar la lógica aquí para mostrar la respuesta */}
              <strong>This is the item's accordion body for ID {id}.</strong> It is
              shown or hidden based on the button state.
            </div>
          </div>
        </div>
      </div>
    );
  };
export default ShowAnswer;
