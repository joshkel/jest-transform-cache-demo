# Demo of jest-transform caching issues

To reproduce:

```sh
nvm use stable
yarn jest test.ts
nvm use lts/fermium
yarn jest test.ts
```
