import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import Loader from "./Loader";

const ShowAnswer = ({ id }) => {
  // Estado para controlar si el componente está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Estado para almacenar la respuesta obtenida del servidor
  const [answer, setAnswer] = useState(null);

  // Estado para gestionar errores del servidor
  const [isServerSideError, setIsServerSideError] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Función asíncrona para realizar la solicitud GET al servidor y obtener la respuesta
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/v1/questions/${id}/show_answer`);
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }

        const data = await response.json();
        setAnswer(data.answer);
      } catch (error) {
        console.error("Error fetching answer:", error);
        setIsServerSideError(true);
        setServerErrors([...serverErrors, error.message]);
      }
    };

    // Llamar a la función de fetch al montar el componente
    fetchData();
  }, [id, serverErrors]); // La dependencia id asegura que useEffect se vuelva a ejecutar si id cambia

  // Función para alternar entre el estado abierto y cerrado del componente
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion" id={`accordion${id}`}>
      <div className="accordion-item">
        <h3 className="accordion-header">
          <button
            className={`accordion-button ${
              isOpen ? "" : "collapsed"
            } + btn btn-primary`}
            type="button"
            onClick={toggleAccordion}
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${id}`}
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls={`collapse${id}`}
            style={{ fontWeight: "bold" }}
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
            {isServerSideError ? (
              <div>
                <strong>Error:</strong> There was a server-side error.
                <ul>
                  {serverErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                {/* Mostrar la respuesta obtenida del servidor */}
                <strong>A:</strong> {answer ? answer : "Loading answer..."}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAnswer;