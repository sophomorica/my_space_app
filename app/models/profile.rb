class Profile < ApplicationRecord
  belongs_to :user
  has_many :posts

  def self.random_profile(ids)
    ids = ids.empty? ? [0] :ids
    Profile.order("RANDOM()")
  end

end
