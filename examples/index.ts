import { array, object } from '../src'
import { pipe } from '../src/function_'

const _a = pipe(
  [1, 2, 3],
  array.map((a) => [a, a] as const),
  object.fromEntries
)

const _b = pipe({ a: 1, b: 2 }, object.entries, object.fromEntries)
