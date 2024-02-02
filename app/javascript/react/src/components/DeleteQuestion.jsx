import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

const DeleteQuestion = ({id}) => {
  const [isServerSideError, setIsServerSideError] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);
  const handleQuestionDelete = (event) => {
    event.preventDefault();
    updatedeleteQuestion(id);
  };
  const updatedeleteQuestion = (id) => {
    fetch(`/api/v1/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data["status"] === "failure") {
          setIsServerSideError(true);
          setServerErrors(data["data"]);
        } else {
          setIsServerSideError(false);
          setServerErrors([]);
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
            <form name="handleQuestionDelete" onSubmit={handleQuestionDelete}>
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
                  onClick={handleQuestionDelete}
                >
                  Yes, Delete it!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteQuestion;
