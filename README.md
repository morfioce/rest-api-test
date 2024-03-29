## Getting started

Install packages

```
npm i
```

Start React app and Api

```bash
npm start & npm run start-api
```

Start Ract app and Api which response with delay (n milliseconds)

```bash
npm start & npm run start-api -- --delay <n>
```

Run tests
```bash
npm test
```

Run snapshot tests
```bash
npm test snapshot
```

Run unit tests
```bash
npm test unit
```

## Api Routes

To load the last 20 stock value samples :

```console
$> curl http://localhost:3000/stocks?_limit=20
```

To load all available stock value samples :

```console
$> curl http://localhost:3000/stocks
```

More exemple : [here](https://github.com/typicode/json-server#routes)

Queries return a JSON array of stock samples :

```javascript
[
  {
    timestamp: "2018-11-08T14:47:41.157Z",
    index: 0,
    stocks: "17.482"
  },
  {
    timestamp: "2018-11-07T14:47:41.158Z",
    index: 1,
    stocks: "18.335"
  }
];
```
