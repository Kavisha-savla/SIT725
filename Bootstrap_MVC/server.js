var express = require("express")
var app = express()
var port = process.env.port || 3004
const mongoose = require('mongoose');


// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('✅ Connected to MongoDB');
});

// 2. Define your schema and model
const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});
const Project = mongoose.model('Project', ProjectSchema);

const test = new Project({
  title: "butterfly-1",
  image: "./public/images/butterfly-1.jpg",
  link: "About Butterfly-1",
  description: "Fluffy and adorable butterfly"
})

test.save().then(()=>console.log("Test Saved"))

// 3. REST API route
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: 'Success' });
});

// 4. Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});