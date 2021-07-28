<div align="center">

# enforce-client-headers

## Make headers great again
  
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

### Skip


```
import enforceClientHeaders from '@osskit/enforce-client-headers'

const server = express();
const socketServer = io();

const skip = nodeEnv !== 'production';

server.use(enforceClientHeaders({skip});
socketServer.use(enforceClientHeaders, {skip});

```

## API

### enforceClientHeaders({headers, skip})
#### headers
Type: `string[]`

The headers you want to enforce on the request

Throws a `400 - missing ${header}` error upon missing required header

#### skip
Type: `boolean`

Skip the headers enforcing when needed

### requiredHeaders

Type: `string[]` by default `['x-api-client', 'x-api-client-version']`
