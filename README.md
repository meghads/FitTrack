# FitTrack – MERN Stack Fitness Tracker

A simple MERN stack fitness tracker where users can log workouts and track their progress.

## Tech Stack

- MongoDB Atlas
- Express.js
- React.js
- Node.js

## Setup

1. Clone the repository

```bash
git clone https://github.com/meghads/FitTrack.git
cd FitTrack
```
Install dependencies

```bash
cd server
npm install

cd ../client
npm install
```
Add environment variables

Create a .env file inside the /server folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Run locally

```bash

# In /server
npm start

# In /client (new terminal)
npm start
```

License
MIT
