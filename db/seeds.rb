# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sports = Folder.create(name: "Weird sports")
turtles = Folder.create(name: "Turtles")
empty = Folder.create(name: "Empty")

Note.create(folder: sports, body: "Bo Taoshi")
Note.create(folder: sports, body: "Hurling")
Note.create(folder: sports, body: "Wife Carrying")

Note.create(folder: turtles, body: "Box turtles")
Note.create(folder: turtles, body: "Soft-shell turtles")
Note.create(folder: turtles, body: "Sea turtles")
