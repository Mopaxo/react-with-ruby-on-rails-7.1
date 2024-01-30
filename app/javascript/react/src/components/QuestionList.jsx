import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import QuestionDetail from "./QuestionDetail";
import EmptyQuestionMessage from "./EmptyQuestionMessage";
import Loader from "./Loader";
import NewQuestion from "./NewQuestion";
const QuestionList = () => {
  const questionsTags = [
    { label: "All", value: 0 },
    { label: "Ruby", value: 1 },
    { label: "Rails", value: 2 },
    { label: "React", value: 3 },
    { label: "Bootstrap", value: 4 },
    { label: "Javascript", value: 5 },
  ];
  const [questionsList, setQuestionsList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(questionsTags[0].value);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isShowLoader, setIsShowLoader] = useState(false);

  const questions_api = "http://127.0.0.1:3000/api/v1/questions";

  const fetchQuestionList = () => {
    setIsShowLoader(false);
    fetch(questions_api)
      .then((response) => response.json())
      .then((data) => {
        /* console.log(data) */
        setQuestionsList(data);
        if (data.length === 0) {
          setIsShowAlert(true);
        } else {
          setIsShowAlert(false);
        }
      });
  };
  useEffect(() => {
    fetchQuestionList();
  }, []);
  /* const questionList = [
        {
            id: 1,
            title: 'How can you check if a key is present in a Hash?',
            tag: 'Ruby Learning'
        },
        {   
            id: 2,
            title: 'What is the difference between strings and a symbol?',
            tag: 'Ruby Learning'
        },
        {
            id: 3,
            title: 'What happened if you add two same keys in Hash?',
            tag: 'Ruby Learning'
        },
        {
            id: 4,
            title: 'How can you delete a given key from a Hask?',
            tag: 'Ruby Learning'
        },
        {
            id: 5,
            title: 'How can you chek if two hashes are identical?',
            tag: 'Ruby Learning'
        },
        {
            id: 6,
            title: 'How can you combine two hashes in Ruby?',
            tag: 'Ruby Learning'
        },
        {
            id: 7,
            title: 'How can you get unique keys from two hashes in Ruby?',
            tag: 'Ruby Learning'
        },
        {
            id: 8,
            title: 'What does the has_key?, the key?, member and include methods in a hash?',
            tag: 'Ruby Learning'
        },
        {
            id: 9,
            title: 'What are blocks in Ruby?',
            tag: 'Ruby Learning'
        },
        {
            id: 10,
            title: 'Does the order of keys matter to compare two hashes in Ruby?',
            tag: 'Ruby Learning'
        }, 


    ] */
  const updateSelectedItem = (event) => {
    setIsShowLoader(false);
    setIsShowAlert(false);
    setQuestionsList([]);
    setSelectedOption(event.target.value);
    fetch(questions_api + `?tags=${questionsTags[event.target.value].label}`)
      .then((response) => response.json())
      .then((data) => {
        /* console.log(data) */
        setQuestionsList(data);
        if (data.length === 0) {
          setIsShowAlert(true);
          setIsShowLoader(true);
        }
      });
  };
  return (
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <button
          type="button"
          className="btn btn-primary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add your own Question!
        </button>
        <p className="lead fw-bold">Filter Questions by Tags</p>

        <select
          className="form-select form-select-lg"
          value={selectedOption}
          onChange={(event) => updateSelectedItem(event)}
        >
          {questionsTags.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.label}
            </option>
          ))}
        </select>
        {questionsList.length > 0 ? (
          questionsList.map((question) => (
            <QuestionDetail question={question} key={question.id} />
          ))
        ) : (
          <Loader isShowLoader={isShowLoader} />
        )}
        {isShowAlert && (
          <EmptyQuestionMessage tagname={questionsTags[selectedOption].label} />
        )}
      </div>
      <NewQuestion />
    </div>
  );
};

export default QuestionList;
