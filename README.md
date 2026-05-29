# Internshala Search Page Replica

This is a React + Vite web app built to replicate an internship search page using the Internshala search API.

## What it does
- Fetches internship listings from `https://internshala.com/hiring/search`
- Shows the internship cards in a search results layout
- Filters results in frontend only by:
  - Profile
  - Location
  - Duration
  - Stipend

## How to run
1. Open a terminal and go to the project folder:
   ```bash
   cd ~/Downloads/internshala-search-page
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in the terminal.

## Build
```bash
npm run build
```

## Notes
- All filtering is handled in the browser without extra API requests.
- The app uses the Internshala search JSON endpoint as requested in the PDF instructions.
