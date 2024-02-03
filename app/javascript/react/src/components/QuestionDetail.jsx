import * as React from "react";
import * as ReactDOM from "react-dom";
import DeleteQuestion from "./DeleteQuestion";
import WriteAnswer from "./WriteAnswer";
import ShowAnswer from "./ShowAnswer";

class QuestionDetail extends React.Component {
  /* Handling the props data of the QuestionDetail */
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.question.likes_count,
      dislikeCount: this.props.question.dislikes_count,
    };
    this.updateLikeCount = this.updateLikeCount.bind(this);
    this.updateDislikeCount = this.updateDislikeCount.bind(this);
  }

  updateLikeCount() {
    this.setState(function (state) {
      return {
        likeCount: state.likeCount + 1,
      };
    });
    this.updateQuestionCounter({ count_for: "like" });
  }

  updateDislikeCount() {
    this.setState(function (state) {
      return {
        dislikeCount: state.dislikeCount + 1,
      };
    });
    this.updateQuestionCounter({ count_for: "dislike" });
  }
  updateQuestionCounter = (data) => {
    fetch(
      `/api/v1/questions/${this.props.question.id}/update_counter`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="card rounded mt-3">
        <div className="card-body">
          <h3 className="card-title">{this.props.question.title}</h3>
          <p className="lead">
            <span className="badge bg-danger">{this.props.question.tag}</span>
          </p>
          {/* Elements inside this row will be flexibles and they use the space between them*/}
          <div className="d-flex justify-content-between">
            {/* Like and dislike buttons will be align horizontal togheter */}
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-primary position-relative"
                onClick={this.updateLikeCount}
                style={{ marginRight: "3px" }}
              >
                <i className="bi bi-hand-thumbs-up"></i>
                {this.state.likeCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {this.state.likeCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                className="btn btn-primary position-relative ms-2"
                onClick={this.updateDislikeCount}
              >
                <i className="bi bi-hand-thumbs-down"></i>
                {this.state.dislikeCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {this.state.dislikeCount}
                  </span>
                )}
              </button>
            </div>
            
            {/* trash button to the right side of the card with ms-auto property */}
            <div className="ms-auto">
              {this.props.question.answer === null && <WriteAnswer id={this.props.question.id}/>}
              <DeleteQuestion id={this.props.question.id}/>
            </div>
          </div>
        </div>
        {this.props.question.answer != null && <ShowAnswer id={this.props.question.id}/>}
      </div>
    );
  }
}

export default QuestionDetail;
