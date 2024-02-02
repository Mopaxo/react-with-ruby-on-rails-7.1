import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

const WriteAnswer = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-warning position-relative"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{marginRight: "8px"}}
      >
        <i className="bi bi-pencil-square"> Answer! </i>
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
                New Answer
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form name="handleWriteQuestion">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Write your new Answer:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteAnswer;
