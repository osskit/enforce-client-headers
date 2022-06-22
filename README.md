<p align="center">
  <img width="250" height="250" src="https://user-images.githubusercontent.com/15312980/175081365-2cfd0580-5ce2-4483-b1aa-2dfc44f0748c.svg"/>
 </p>
                                                                                                                                           
# enforce-client-headers
Enforce headers against http calls to your Express API

## Install
```
yarn add @osskit/enforce-client-headers
```

## Usages

### Simple
```
import { enforceClientHeaders } from '@osskit/enforce-client-headers'

const server = express();
const socketServer = io();

server.use(enforceClientHeaders());
socketServer.use(enforceClientHeaders());
```

### add more headers

```
import { enforceClientHeaders, defaultHeaders } from '@osskit/enforce-client-headers'

const server = express();
const socketServer = io();

const headers = [...defaultHeaders, 'my-extra-header'];

server.use(enforceClientHeaders({ headers });
socketServer.use(enforceClientHeaders, { headers });
```

## API

### enforceClientHeaders({headers})
#### headers
Type: `string[]`

The headers you want to enforce on the request

Throws a `400 - missing ${header}` error upon missing required header

### defaultHeaders

Type: `string[]`, by default `['x-api-client', 'x-api-client-version']`
