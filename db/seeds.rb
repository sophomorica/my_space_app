@liked = [true, false]
30.times do
  name = Faker::Movies::HarryPotter.character
  nickname = Faker::Games::Pokemon.move
  image = Faker::Avatar.image(name, "200x200", "png", "set5")
  email = Faker::Internet.email
  password = "password"
  u = User.create(name: name, email: email, nickname: nickname, password: password, password_confirmation: password)

  p = Profile.create(
    name: u.name, 
    about: Faker::Quotes::Shakespeare.hamlet_quote,
    avatar: image,
    email: u.email,
    user_id: u.id
  )
  3.times do 
    Post.create(
      body: Faker::Quote.most_interesting_man_in_the_world,
      liked: @liked.sample,
      profile_id: p.id
    )
  end

end

puts "we think we made 30 users  with profiles and 3 comments each"