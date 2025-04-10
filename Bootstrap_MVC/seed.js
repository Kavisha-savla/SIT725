const mongoose = require('mongoose');
const Project = require('./models/project'); // Adjust the path if necessary

mongoose.connect('mongodb://127.0.0.1:27017/NEWDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});

const butterflyData = [
  {
    title: "Monarch Butterfly",
    image: "./public/images/butterfly-1.jpg",
    link: "https://en.wikipedia.org/wiki/Monarch_butterfly",
    description: "The Monarch Butterfly is a beautiful migratory species."
  },
  {
    title: "Blue Butterfly",
    image: "./public/images/butterfly-2.avif",
    link: "https://en.wikipedia.org/wiki/Blue_butterfly",
    description: "A rare species known for its vibrant blue color."
  },
  {
    title: "Swallowtail Butterfly",
    image: "./public/images/butterfly-3.jpeg",
    link: "https://en.wikipedia.org/wiki/Swallowtail_butterfly",
    description: "The Swallowtail Butterfly has a distinct tail-like shape."
  }
];

// Use the 'create' method to insert the data into your database
Project.create(butterflyData)
  .then(() => {
    console.log("Data inserted successfully!");
    mongoose.connection.close(); // Close the connection after seeding
  })
  .catch((err) => {
    console.log("Error inserting data:", err);
    mongoose.connection.close();
  });
