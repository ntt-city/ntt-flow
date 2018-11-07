# Entity Flow (ntt-flow)
The sequence of initialization, modification, aggregation, or other processes through which a data entity passes from instantiation to persistence.

Flow uses pure functions and does not update the data in-place, but instead always yields new updated data.

Flow only adds a dependency to [immutable](https://facebook.github.io/immutable-js/)

### Effects

Flow will attempt to construct some effect mechanism.

### Interceptors

Flow will attempt to construct some interceptor mechanism.

### Messages

Flow defines Message but it does not implement a delivery mechanism (http, sockets)

### Reducers

Flow implements logical and mathematical reducers.

### Rules

Flow will attempt to construct some business rules mechanism.

### Types

Flow defines general types such as ValueType, SimpleObject, FlatObject and Entity.

## Development

### Publish

By default all scoped packages are published privately. To publish a scoped package publicly, pass the access flag with the value public:

```
npm publish --access public
```
