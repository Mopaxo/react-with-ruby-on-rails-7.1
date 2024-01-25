import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
const QuestionDetail = (props) => {

    const [likeCount, setLikeCount] = useState(0);

    return (
        <div className='card rounded mt-3'>
            <div className='card-body'>
                <h3 className='card-title'>{props.question.title}</h3>
                    <p className='lead'>
                        <span className='badge bg-danger'>{props.question.tag}</span>
                    </p>
                    <button className= "btn btn-primary mt-1" onClick={() => setLikeCount(likeCount + 1)}> 
                        <i className="bi bi-hand-thumbs-up"></i>
                    </button>
                    {
                        likeCount > 0 ?
                        <span className="badge bg-info">{
                            likeCount
                        }</span> : ''
                    }
            </div>
        </div>
    )
}
export default QuestionDetail;