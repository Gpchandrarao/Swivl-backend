### Recipe Sharing Platform API

This project is a backend API for a recipe sharing platform, allowing users to perform CRUD operations on recipes. It is built using Node.js, Express.js, and MongoDB. Object-Oriented Programming (OOP) concepts are incorporated to organize code and improve maintainability.

### Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Endpoints](#endpoints)
- [Documentation](#documentation)
- [Deployment](#deployment)
- [Evaluation Criteria](#evaluation-criteria)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database

### Installation

1. Clone the repository:

   ```bash
  [ git clone https://github.com/your-username/recipe-sharing-platform-api.git](https://github.com/Gpchandrarao/Swivl-backend.git)
cd recipe-sharing-platform-api
npm install

### Endpoints

User Registration:

POST /users/register
{
  "username": "your_username",
  "password": "your_password"
}

User Login:

POST /users/login
{
  "username": "your_username",
  "password": "your_password"
}

Create Recipe (requires authentication):

POST /recipes/create
{
  "title": "Recipe Title",
  "description": "Recipe Description",
  "ingredients": ["Ingredient 1", "Ingredient 2"],
  "instructions": "Recipe Instructions"
}

Get Recipe:

GET /recipes/:recipeId

Update Recipe (requires authentication):

PUT /recipes/:recipeId
{
  "title": "Updated Recipe Title",
  "description": "Updated Recipe Description",
  "ingredients": ["Updated Ingredient 1", "Updated Ingredient 2"],
  "instructions": "Updated Recipe Instructions"
}

Delete Recipe (requires authentication):

DELETE /recipes/:recipeId
