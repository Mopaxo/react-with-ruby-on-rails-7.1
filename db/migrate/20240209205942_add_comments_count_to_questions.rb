class AddCommentsCountToQuestions < ActiveRecord::Migration[7.1]
  def change
    add_column :questions, :comments_count, :integer, default: 0
  end
end
