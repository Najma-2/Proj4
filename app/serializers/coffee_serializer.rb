class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :blend_name, :origin, :variety, :notes, :image_url
  has_many :reviews 
end
