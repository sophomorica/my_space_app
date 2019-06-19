30.times do
  name = Faker::Movies::HarryPotter.character
  nickname = Faker::Games::Pokemon.move
  image = Faker::Avatar.image(name, "100x400", "png", "set2")
  email = Faker::Internet.email
  password = "password"
  u = User.create(name: name, email: email, nickname: nickname, password: password, password_confirmation: password)

  Profile.create(
    name: name, 
    about: Faker::Quotes::Shakespeare.hamlet_quote,
    avatar: image,
    user_id: u.id
  )

end

puts "we think we made 30 users Test"