class Profile < ApplicationRecord
  belongs_to :user

  def self.random_profile(ids)
    ids = ids.empty? ? [0] :ids
    Profile.order("RANDOM()")
  end

end
