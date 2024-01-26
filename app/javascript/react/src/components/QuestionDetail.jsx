import * as React from 'react';
/* import { useState } from 'react'; */
import * as ReactDOM from 'react-dom';
class QuestionDetail extends React.Component {

    constructor(props) { 
        super(props);
        this.state = { likeCount: 0 } 
        this.updateLikeCount = this.updateLikeCount.bind(this);
    }

    updateLikeCount() {
        this.setState(function(state) {
            return { 
                likeCount: state.likeCount + 1 
            }
        })
    }
    render(){
        return (
            <div className='card rounded mt-3'>
                <div className='card-body'>
                    <h3 className='card-title'>{this.props.question.title}</h3>
                        <p className='lead'>
                            <span className='badge bg-danger'>{this.props.question.tag}</span>
                        </p>
                        <button className= "btn btn-primary mt-1" onClick={this.updateLikeCount}> 
                            <i className="bi bi-hand-thumbs-up"></i>
                        </button>
                        {
                            this.state.likeCount > 0 ?
                            <span className="badge bg-info">{
                                this.state.likeCount
                            }</span> : ''
                        }
                </div>
            </div>
        )    
    }  
}
/* const QuestionDetail = (props) => {

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
} */
export default QuestionDetail;