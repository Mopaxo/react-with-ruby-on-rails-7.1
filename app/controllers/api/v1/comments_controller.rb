class Api::V1::CommentsController < ApplicationController
  protect_from_forgery with: :null_session
  # Acción para mostrar la lista de comentarios de una pregunta
  def index
    @question = Question.find(params[:question_id])
    @comments = @question.comments
    render json: { comments: @comments }, status: :ok
  end
  def create
    @question = Question.find(params[:question_id])
    @comment = @question.comments.new(comment_params)
    if @comment.save
      render json: { data: @comment, status: 'success' }, status: :ok
    else
      render json: { data: @comment.errors.full_messages, status: 'failure' }, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
