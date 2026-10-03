# THE PORT.ES

The digital identity of El Puerto de la Torre, Málaga (29190).

## Develop

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`.

## GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and publishes the static site whenever `main` changes. In the repository settings, enable **GitHub Actions** as the Pages build and deployment source. `public/CNAME` configures `theport.es`; point the domain's DNS to GitHub Pages using the records GitHub currently recommends for the repository.

Client-side routes include a `404.html` fallback in the deployment artifact, so direct links to pages continue to work on Pages.

## Project structure

- `src/pages/` — Home, Map, Discover, People, Business and Join screens.
- `src/components/map/` — MapLibre renderer, category filters and entity details.
- `src/data/` — local mock profiles, places and index counts.
- `src/data/repository.ts` — data access boundary to replace with a CMS, API or database later.

The map uses a public CARTO basemap and local mock points. Names, addresses, ratings and index counts in the development data are illustrative placeholders; they are not verified real listings.

The Join form opens the visitor's email application and does not store submissions.
