class Api::SkillsController < ApplicationController

  def index
    @skills = Skill.all
    render json: @skills
  end

  def show
    skill_id = params[:id]
    @skill = Skill.find_by_id(skill_id)
    render json: @skill
  end
end
