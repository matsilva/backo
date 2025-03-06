# backo

[![build, test, publish](https://github.com/matsilva/backo/actions/workflows/ci.yml/badge.svg)](https://github.com/matsilva/backo/actions/workflows/ci.yml)

Simple exponential backoff because the others seem to have weird abstractions.

This is a [Pure ESM Package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Installation

```
$ npm install backo
```

## Options

- `min` initial timeout in milliseconds [100]
- `max` max timeout [10000]
- `jitter` [0]
- `factor` [2]

## Example

```js
import { Backoff } from 'backo';

const backoff = new Backoff({ min: 100, max: 10000 });

// Retry a fetch until it succeeds
async function fetchWithRetry(url) {
  while (true) {
    try {
      const res = await fetch(url);
      if (res.ok) return res.json();
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, backoff.duration()));
  }
}
```

## Node.js Version Requirements

This is a Pure ESM package that requires Node.js 12.20+ or 14.13+. It cannot be `require()`'d from CommonJS.

# License

MIT

```

```
