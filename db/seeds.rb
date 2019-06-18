30.times do
  name = Faker::Movies::HarryPotter.character
  nickname = Faker::Games::Pokemon.move
  image = Faker::Avatar.image(name, "100x400", "png", "set2")
  email = Faker::Internet.email
  User.create(name: name, nickname: nickname, image: image, image: image)
end

puts "we made 30 users"