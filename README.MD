# pipeable-es-fns

A typed, curried, ES6+ functions library for pipe style programming.

## Use it when

- You like pipe style programming.
- But [Ramda](https://ramdajs.com/) is too cumbersome for you.
- And [fp-ts](https://github.com/gcanti/fp-ts) introduce too many FP concepts than you want.
- You just want to use native ES6+ functions with pipe style programming.

## Example

```typescript
import {array, object, pipe} from 'pipeable-es-fns'

const _a = pipe(
  [1, 2, 3],
  array.map((a) => [a, a] as const),
  object.fromEntries
)

const _b = pipe({a: 1, b: 2}, object.entries, object.fromEntries)
```

## Design philosophy

0. Just curried the ES6+ functions and try to keep others untouched.
1. Just use the TypeScript official type definitions of ES6+ functions.
2. Just delegate the implementation to the native ES6+ functions to avoid runtime.
3. Unlike Ramda, the pipe function accepts data as its first argument for better type inference.
4. Organize functions into namespace rather than function overloading for better type inference.
5. Doesn't support deprecated methods intentionally.
6. Encourage to specify the optional arguments explicitly.
7. Encourage to use one function in one way only.
