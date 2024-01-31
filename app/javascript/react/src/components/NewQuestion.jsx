import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

const NewQuestion = () => {
  const questionsTags = [
    { label: "Ruby", value: 0 },
    { label: "Rails", value: 1 },
    { label: "React", value: 2 },
    { label: "Bootstrap", value: 3 },
    { label: "Javascript", value: 4 },
    { label: "Data Structure", value: 5 },
  ];
  /* const [title, setTitle] = useState('');
  const [tag, setTag] = useState(questionsTags[0].value);
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleTagChange = (event) => {
    setTag(event.target.value);
  } */
  const [formField, setFormField] = useState({
    title: '',
    tag: questionsTags[0].value
  });
  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    console.log(formField);
    createQuestion(formField);
  }
  const handleFormFields = (event) => {
    setFormField({...formField, [event.target.name]: event.target.value})
  }

  const createQuestion = (data) => {
    fetch('http://127.0.0.1:3000/api/v1/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.log('Error:', error);
    })
  }

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="staticBackdropLabel">
              Write your question and help us improve it!
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleQuestionSubmit}>
            <div className="modal-body">
                <div className="form-group">
                    <label className="form-label mt-3 mb-3">Title</label>
                    <input type="text" className="form-control form-control-lg rounded-1" value={formField.title} onChange={event => handleFormFields(event)} name="title"></input>
                </div>
            </div>
            <div className="modal-body">
                <div className="form-group">
                    <label className="form-label mb-2">
                    Choose a tag for your question
                    </label>
                    <select className="form-select form-select-lg rounded 1" value={formField.tag} onChange={event => handleFormFields(event)} name="tag">
                        {questionsTags.map(tag => (
                          <option key={tag.value} value={tag.value}>{tag.label}</option>  
                        ))}
                    </select>
                </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-info">
                Commit Question!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewQuestion;
