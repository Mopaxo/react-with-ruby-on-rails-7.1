import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

const DeleteQuestion = () => {
  /* const [isServerSideError, setIsServerSideError] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);
  const handleQuestionDelete = (event) => {
    event.preventDefault();
    deleteQuestion();
  };
  const deleteQuestion = () => {
    fetch;
  }; */
  return (
    <>
      <button
        type="button"
        className="btn btn-danger position-relative"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-trash3-fill"></i>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Deleting Question
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {" "}
              Are you sure you want to delete the question?{" "}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Yes, Delete it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteQuestion;
