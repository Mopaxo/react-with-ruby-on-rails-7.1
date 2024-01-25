import * as React from 'react';
import * as ReactDOM from 'react-dom';

const QuestionList = () => {
    const questionList = [
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


    ]
    return(
        <div className='row'>
            <div className='col-lg-10 mx-auto'>
                {questionList.map((question) =>
                    <div className='card rounded-0 mt-3' key={question.id}>
                        <div className='card-body'>
                            <h3 className='card-title'>{question.title}</h3>
                            <p className='lead'>
                                <span className='badge bg-danger'>{question.tag}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default QuestionList;