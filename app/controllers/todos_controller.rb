class TodosController < ApplicationController
  protect_from_forgery except: [:create]

  def index
    @todos = Todo.all
  end

  def create
    @todo = Todo.create!(todo_params)
    respond_to do |format|
      format.html {
        redirect_to root_path
      }
      format.json {
        render json: @todo, status: :created
      }
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:text)
  end
end
