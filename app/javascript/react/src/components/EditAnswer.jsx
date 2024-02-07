import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

const EditAnswer = ({ id }) => {
    const [isServerSideError, setIsServerSideError] = useState(false);
    const [serverErrors, setServerErrors] = useState([]);
    const [answer, setAnswer] = useState("");
  
    const handleAnswerSubmit = (event) => {
      event.preventDefault();
      updateAnswerSubmitted();
    };
  
    const updateAnswerSubmitted = () => {
      fetch(`/api/v1/questions/${id}/update_answer`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          if (data.status === "failure") {
            setIsServerSideError(true);
            setServerErrors(data.data);
          } else {
            setIsServerSideError(false);
            setServerErrors([]);
            setAnswer("");
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    };
  
    return (
      <>
        <button
          type="button"
          className="btn btn-warning position-relative"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModalEditAnswer_${id}`} // Agregar id específico para el modal
        >
          <i className="bi bi-pencil-square"> Edit! </i>
        </button>
  
        <div
          className="modal fade"
          id={`exampleModalEditAnswer_${id}`} // Agregar id específico para el modal
          tabIndex="-1"
          aria-labelledby={`exampleModalLabelWriteAnswer_${id}`} // Agregar id específico para el modal
          aria-hidden="true"
        >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabelWriteAnswer"
              >
                What do you change about this answer?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form name="handleWriteQuestion" onSubmit={handleAnswerSubmit}>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Write the new Solution:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={handleAnswerSubmit}
              >
                Send it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAnswer;
