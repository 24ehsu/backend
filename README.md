# Backend API

A simple Node.js + Express REST API.

## How to Run

```bash
node index.js
```

Server starts at `http://localhost:3000`.

## Endpoints

### GET /api/about
Returns basic info about me.
```json
{
  "name": "Elizabeth Hsu",
  "major": "Information Science",
  "year": "2028",
  "hometown": "Manlius, NY"
}
```

### GET /api/projects
Returns a list of projects.
```json
[
  { "title": "YMCA: Communications & Outreach", "description": "...", "tech": ["Python", "Tableau", "Excel"] },
  ...
]
```

### POST /api/projects
Add a new project. Send JSON body with `title`, `description`, and `tech`.
```json
{ "title": "New Project", "description": "What it does", "tech": ["React"] }
```
Returns the updated projects array.

### GET /api/favorites
Returns my favorite songs, movies, and restaurants.
```json
{
  "songs": ["Espresso - Sabrina Carpenter", "..."],
  "movies": ["The Parent Trap", "..."],
  "restaurants": ["Ithaca Bakery", "..."]
}
```
