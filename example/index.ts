import { array, object } from '../src'
import { pipe } from '../src/fn'

const a = pipe(
  [1, 2, 3],
  array.map((a) => [a, a] as const),
  object.fromEntries
)
