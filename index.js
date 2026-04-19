const express = require('express');
const app = express();

app.use(express.json());

// In-memory projects store
let projects = [
  {
    title: "YMCA: Communications & Outreach",
    description: "I analyze platform performance metrics to drive data-driven marketing strategies, synthesizing engagement data to optimize outreach and conversion rates, and translate complex insights into actionable reports for senior leadership.",
    tech: ["Python", "Tableau", "Excel"]
  },
  {
    title: "Interactive Application Development",
    description: "Co-developed a Python-based interactive application and managed its full development lifecycle. Self-taught OpenCV to integrate a gesture-based user interface. The prototype was archived by the university for its technical quality.",
    tech: ["Python", "OpenCV"]
  },
  {
    title: "Superstore Data Analytics",
    description: "Analyzed large-scale datasets to identify drivers of business loss by evaluating the impact of discounts on profit margins, pinpointing underperforming product categories and regions using profit heatmaps and regression plots.",
    tech: ["Python", "Tableau"]
  }
];

// GET /
app.get('/', (req, res) => {
  res.json({ message: 'API is running!', endpoints: ['/api/about', '/api/projects', '/api/favorites'] });
});

// GET /api/about
app.get('/api/about', (req, res) => {
  res.json({
    name: "Elizabeth Hsu",
    major: "Information Science",
    year: "2028",
    hometown: "Manlius, NY"
  });
});

// GET /api/projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// POST /api/projects
app.post('/api/projects', (req, res) => {
  const { title, description, tech } = req.body;
  if (!title || !description || !tech) {
    return res.status(400).json({ error: 'title, description, and tech are required' });
  }
  const newProject = { title, description, tech };
  projects.push(newProject);
  res.status(201).json(projects);
});

// GET /api/favorites - creative endpoint
app.get('/api/favorites', (req, res) => {
  res.json({
    songs: ["Espresso - Sabrina Carpenter", "Cruel Summer - Taylor Swift", "Levitating - Dua Lipa"],
    movies: ["The Parent Trap", "Knives Out", "Spirited Away"],
    restaurants: ["Ithaca Bakery", "Chipotle", "Hot Pot"]
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
