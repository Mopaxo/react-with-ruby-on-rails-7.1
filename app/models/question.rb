class Question < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :tag, presence: true
    has_many :comments
end
