30.times do
  name = Faker::Movies::HarryPotter.character
  nickname = Faker::Games::Pokemon.move
  image = Faker::Avatar.image(name, "50x200", "png", "set2")
  email = Faker::Internet.email
  password = "password"
  u = User.create(name: name, email: email, nickname: nickname, password: password, password_confirmation: password)

  Profile.create(
    name: u.name, 
    about: Faker::Quotes::Shakespeare.hamlet_quote,
    avatar: image,
    email: u.email,
    user_id: u.id
  )

end

puts "we think we made 30 users Test"