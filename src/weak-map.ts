export const delete_ =
  <K extends object>(key: K) =>
  <V>(map: WeakMap<K, V>) =>
    map.delete(key)

export const get =
  <K extends object>(key: K) =>
  <V>(map: WeakMap<K, V>): V | undefined =>
    map.get(key)

export const has =
  <K extends object>(key: K) =>
  <V>(map: WeakMap<K, V>): boolean =>
    map.has(key)

export const set =
  <K extends object>(key: K) =>
  <V>(value: V) =>
  (map: WeakMap<K, V>): WeakMap<K, V> =>
    map.set(key, value)
