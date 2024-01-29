import * as React from 'react';
import * as ReactDOM from 'react-dom';

class EmptyQuestionMessage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="mt-4 alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Ops!</strong> We dont have any questions with the tag: {this.props.tag}. Please select another option form the list
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        )
    }

 }
export default EmptyQuestionMessage;