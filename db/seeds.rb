
Skill.destroy_all
User.destroy_all
Project.destroy_all


Skill.create({title: "Ruby", desc: "A simple object-oriented programming language designed to quicken the pace of building fast applications."})
Skill.create({title: "Ruby on Rails", desc: "It was created by Yukihiro Matsumoto aka Matz with the developer's happiness in mind. It is by far my favorite programming language of all time. Matz did it right."})
Skill.create({title: "HTML", desc: "A markup language for creating web pages. It was my first coding love and the foundation of my education in web development."})
Skill.create({title: "CSS", desc: "It stands for Cascading Style Sheets. I didn't care for CSS to begin with but as my projects became larger and more in-depth, I started using CSS more and more, enjoying the design aspect of the language."})
Skill.create({title: "JavaScript", desc: "This language is perhaps my least favorite. I understand the importance of the cross-platform scripting language, but there have been many frameworks created that can get the problem finished easier and with less code."})
Skill.create({title: "Express", desc: "This framework for Node quickly became my best friend once I began to understand it. The Stream project I created was perhaps the fastest and easiest project for me because of Express."})
Skill.create({title: "React", desc: "The most difficult part of my entire course at General Assembly. This language made me really have to think programmatically. I know that the more I use React, the easier it will become for me."})
Skill.create({title: "SQL", desc: "This database tool is so easy and structured, I quickly switched positions about loving NoSQL. I am proficitent in both, but SQL (and Postgres especially) tends to flow easier to me."})

User.create({username: "Skyoumans93", password: "BornThisWay1993!", email: "skyyoumans@gmail.com"})

Project.create({title: "Connect Four", desc: "This was my very first project, where I created a copy of the game Connect Four, styled with Bootstrap. I forced myself to use JavaScript because it is my least proficient language. The project ended up turning out well and I recieved a great grade for it.", link_at: "http://skylarsconnectfourgame.bitballoon.com/gameboard"})
Project.create({title: "Stream", desc: "For my second project, I created a movie streaming web site.  I used Express, Handlebars, and Materialize for this project. Definitely the most fun project I made.", link_at: "https://limitless-citadel-16097.herokuapp.com"})
Project.create({title: "Doggo", desc: "My third project was a hit home for me. I recently had to rehome my pet and so I created this project in her name. Doggo is an application to help an owner rehome their pets. It was my first project in React and CSS and I definitly became better with React after creating it.", link_at: "https://doggo-adopts.herokuapp.com/login"})
Project.create({title: "Muscle Memory", desc: "The final project was created using React on Rails and CSS. I soon realized that this project quickly became the most complex of all my projects, and so I was determined to make it the best. I succeeded.", link_at: "https://musclememory.herokuapp.com/"})


img: "https://i.imgur.com/wT1aZ7zm.png",
img: "https://i.imgur.com/FeefhTOm.png",
img: "https://i.imgur.com/sSeXdw5m.png",
img: "https://i.imgur.com/ELHfYR4m.png",