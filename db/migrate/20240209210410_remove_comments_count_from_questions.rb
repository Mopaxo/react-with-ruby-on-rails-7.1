class RemoveCommentsCountFromQuestions < ActiveRecord::Migration[7.1]
  def change
    remove_column :questions, :comments_count, :integer
  end
end
