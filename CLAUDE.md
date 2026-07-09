# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

REST API backend for "Concerts Database", a web app for tracking concerts attended. Node.js + Express + MongoDB (Mongoose). ES modules throughout (`"type": "module"` in package.json).

## Commands

- `npm run dev` — start the server with nodemon (auto-restart on change), listens on `PORT` from `.env`
- `npm install` — install dependencies
- No test suite exists (`npm test` is a placeholder that exits with an error)
- No lint/format tooling is configured

## Environment Setup

Requires a `.env` file (see `.env.sample`) with:
- `PORT` — server port
- `MONGODB_URI` — MongoDB connection string
- `REACT_APP_URL` — frontend origin (referenced for CORS-related config)

## Architecture

Standard three-layer Express structure, one resource (`concerts`) currently implemented:

- `index.js` — app entrypoint: loads env, sets up middleware (`cors`, `express.json`, `urlencoded`), mounts `concertRouter` at `/concerts`, calls `connectDB()`, starts the listener.
- `config/db.config.js` — `connectDB()` connects to MongoDB via Mongoose using `MONGODB_URI`.
- `models/concert.model.js` — Mongoose schema/model for a Concert (`tour`, `artist`, `year`, `city`, `country`, `rating` 1-5, timestamps).
- `controllers/concert.controller.js` — CRUD handlers (`getConcerts`, `getConcert`, `addConcert`, `editConcert`, `deleteConcert`), each wrapped in try/catch returning `{ message: error.message }` with status 500 on failure.
- `routes/concert.route.js` — maps HTTP verbs/paths to controller functions, mounted under `/concerts`:
  - `GET /concerts/all`
  - `GET /concerts/:id`
  - `POST /concerts/add`
  - `PUT /concerts/edit/:id`
  - `DELETE /concerts/delete/:id`

To add a new resource, follow this same pattern: Mongoose model in `models/`, controller in `controllers/`, router in `routes/`, then mount the router in `index.js`.

## Deployment

The API is deployed at https://concert-database-api.onrender.com/. GET endpoints can be viewed directly in a browser; POST/PUT/DELETE require a client like Postman or Insomnia.
