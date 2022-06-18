<div align="center">

# enforce-client-headers

Enforce headers against http calls to your API
  
</div>

## Install
```
yarn add @osskit/enforce-client-headers
```

## Usages

### Simple
```
import enforceClientHeaders from '@osskit/enforce-client-headers'

const server = express();
const socketServer = io();

server.use(enforceClientHeaders());
socketServer.use(enforceClientHeaders());

```

### Extra headers

```
import enforceClientHeaders, { requiredHeaders } from '@osskit/enforce-client-headers'

const server = express();
const socketServer = io();

const headers = [...requiredHeaders, 'my-extra-header'];

server.use(enforceClientHeaders({headers});
socketServer.use(enforceClientHeaders, {headers});

```

## API

### enforceClientHeaders({headers})
#### headers
Type: `string[]`

The headers you want to enforce on the request

Throws a `400 - missing ${header}` error upon missing required header

### requiredHeaders

Type: `string[]` by default `['x-api-client', 'x-api-client-version']`
