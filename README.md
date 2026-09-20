# Gold Harmonic Terminal

Production-oriented real-time XAU/USD analysis dashboard. The server owns the Twelve Data key, normalizes candles, calculates ZigZag swings, and detects Fibonacci harmonic patterns. Without `TWELVE_DATA_API_KEY`, the app runs an explicitly labelled deterministic DEMO MODE.

## Run

```bash
npm install
cp .env.example .env
# add TWELVE_DATA_API_KEY for live data
npm run dev
```

Open http://localhost:5173. Production build:

```bash
npm run build && npm start
```

Tests: `npm test`

## Architecture

`Twelve Data REST/WebSocket -> server adapter -> normalized candles -> ZigZag -> harmonic scanner -> WebSocket -> React`.

The REST endpoint is `time_series` and the Twelve Data quote stream is `wss://ws.twelvedata.com/v1/quotes/price?apikey=...`. Quotes are merged into the current interval candle; the provider remains the source of truth and no synthetic live data is generated. Historical data is limited by `HISTORY_LIMIT`. Provider failures are surfaced to the UI. A missing key intentionally selects the deterministic fixture mode.

## API

- `GET /api/health`
- `GET /api/config`
- `GET /api/candles?limit=300`
- `GET /api/swings`
- `GET /api/patterns`
- WebSocket `/ws` events: `candle.update`, `market.status`, `zigzag.update`, `harmonic.detected`, `harmonic.updated`, `harmonic.invalidated`, `error`.

## Notes

ZigZag pivots require future depth bars before confirmation; the last developing leg is never marked confirmed. Harmonics are candidates, not guarantees or financial advice. Pattern rules and tolerances are in `server/src/harmonics.ts`.
