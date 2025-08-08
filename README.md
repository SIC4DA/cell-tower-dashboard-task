## Cell Tower Dashboard

A lightweight React + TypeScript dashboard that visualizes a list of cell towers with quick analytics, interactive D3 charts, and a searchable/filterable data table. Data is mocked locally for easy development and can be swapped for a real API later.

### Features

- **At-a-glance analytics**: Total towers, active towers, and average signal strength
- **Charts**: D3 Pie (status distribution) and Bar (towers per city)
- **Data table**: Search by name and filter by status, network type, and city
- **Typed domain model**: Strongly-typed `CellTower` across the app
- **Fast dev experience**: Vite + React 19, SCSS Modules, path aliases

### Tech Stack

- **Frontend**: React 19, TypeScript 5, Vite 7
- **Visualization**: D3 v7
- **Styling**: SCSS Modules, global SCSS with variables/mixins
- **Icons**: `lucide-react`
- **Linting**: ESLint 9 (TypeScript + React Hooks rules)

---

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended). Works with npm, pnpm, yarn, or bun.
- Optional: Bun 1+ (`bun.lock` is present; bun works great here).

### Install

Choose one package manager and stick to it.

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Run the dev server

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

Then open `http://localhost:5173`.

### Build for production

```bash
# npm
npm run build

# Preview the built app locally
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
  components/
    data-table/        # Reusable data table: search, filter, table
    header/            # App header
    shared/            # Generic UI pieces (e.g., AnalyticCard)
  hooks/
    useGetCellTowers.tsx   # Loads mock data with a small artificial delay
  mocks/
    CellTowers.json        # Local mock data source
  pages/
    home/                  # Home page composition
      components/
        charts/            # D3 Pie and Bar charts
  styles/                  # Global styles, variables, and fonts
  types/
    tower.ts               # CellTower type
  utils/                   # Analytics and table filtering helpers
```

Notable configuration:

- Path alias: `@` → `/src` configured in `vite.config.ts` and `tsconfig.json`
- Global SCSS variables auto-injected via Vite: `@use "@/styles/variables" as *;`

---

## How It Works

- `src/pages/home/index.tsx` composes the page: `Header`, `Analytics`, `Charts`, and `CellTowersTable`.
- `useGetCellTowers` retrieves `src/mocks/CellTowers.json` with a short fake network delay, returning `data`, `loading`, `error`.
- `Analytics` calculates totals/averages via `src/utils/analytics.ts` and renders `AnalyticCard`s.
- `Charts` renders D3 charts:
  - `PieChart`: Active vs Offline towers.
  - `BarChart`: Tower counts per city.
- `CellTowersTable` uses a generic `DataTable` with:
  - `SearchBar` for case-insensitive name search
  - `FilterDropdown`s for status/network type/city
  - `applyFilters` from `src/utils/dataTable.ts` to compute the filtered rows

### Domain Model

```ts
export interface CellTower {
  id: string;
  name: string;
  city: string;
  networkType: "4G" | "5G";
  status: "active" | "offline";
  signalStrength: number;
}
```

---

## Replacing Mocks with a Real API

Swap the implementation inside `src/hooks/useGetCellTowers.tsx` to fetch from an endpoint:

```ts
useEffect(() => {
  const fetchCellTowers = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/towers");
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const towers: CellTower[] = await res.json();
      setData(towers);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  fetchCellTowers();
}, []);
```

If your API base URL differs across environments, introduce a `.env` file and read it with `import.meta.env` in Vite.

Highly recommended to consider using a dedicated Library like React Query

---

## Scripts

- **dev**: start Vite dev server
- **build**: type-check and build production assets
- **preview**: preview the production build locally
- **lint**: run ESLint on the codebase

---

## Troubleshooting

- **Node version**: Ensure Node 18+.
- **SCSS variables missing**: Vite injects variables via `vite.config.ts`. If imports fail, confirm the `@` alias and the `additionalData` setting.
- **Blank charts**: D3 charts render only when there is data; ensure `data` is loaded.

---

## License

This project’s license is defined by the repository owner. If none is provided, treat it as internal/private.
