class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :profiles

  serialize :liked_profiles, Array

  def self.random_profile(ids)
    ids = ids.empty? ? [0] : ids
    Profile.where("id NOT IN (?)", ids)
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Profile.where("id IN (?)",ids)
  end
  
end
