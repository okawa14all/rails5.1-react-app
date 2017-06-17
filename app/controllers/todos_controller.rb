class TodosController < ApplicationController
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
        head 204
      }
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:text)
  end
end
