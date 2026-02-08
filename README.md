# Availabilityio Stremio Addon

A Stremio stream addon that checks TMDB digital/streaming release dates and shows a stream card when released. If not released, it shows a "not yet available" card with the planned digital release date.

## Setup

- Set `TMDB_API_KEY` in your environment.

## Run locally

```powershell
$env:TMDB_API_KEY="your_tmdb_key"
npm install
npm run dev
```

Open `http://localhost:7874/manifest.json` and install the addon in Stremio.

## Run with Docker

```powershell
$env:TMDB_API_KEY="your_tmdb_key"
docker compose up --build
```
