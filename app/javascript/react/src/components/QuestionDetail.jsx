import * as React from 'react';
/* import { useState } from 'react'; */
import * as ReactDOM from 'react-dom';
class QuestionDetail extends React.Component {

    constructor(props) { 
        super(props);
        this.state = { 
        likeCount: 0,
        dislikeCount: 0 
        } 
        this.updateLikeCount = this.updateLikeCount.bind(this);
        this.updateDislikeCount= this.updateDislikeCount.bind(this);
    }

    updateLikeCount() {
        this.setState(function(state) {
            return { 
                likeCount: state.likeCount + 1 
            }
        })
    }
    updateDislikeCount() {
        this.setState(function(state) {
            return { 
                dislikeCount: state.dislikeCount + 1 
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

                        <button type="button" className="btn btn-primary position-relative" onClick={this.updateLikeCount} style={{marginRight: 1 + 'em'}}>
                            <i className="bi bi-hand-thumbs-up"></i>
                            {
                            this.state.likeCount > 0 ?
                            <   span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{
                                this.state.likeCount
                                }</span> : ''
                            }
                        </button>
                        <button type="button" className="btn btn-primary position-relative" onClick={this.updateDislikeCount}>
                            <i class="bi bi-hand-thumbs-down"></i>
                            {
                            this.state.dislikeCount > 0 ?
                            <   span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{
                                this.state.dislikeCount
                                }</span> : ''
                            }
                        </button>
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