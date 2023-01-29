class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :username, :password_digest
  has_many :reviews
  has_many :coffees, through: :reviews
end
