class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user
  has_one :user
end
