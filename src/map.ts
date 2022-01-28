export const size = (map: Map<unknown, unknown>): number => map.size

/**
 * @deprecated only for SSP
 * */
export const siza = (map: Map<unknown, unknown>): number => map.size

export const clear = (map: Map<unknown, unknown>): void => map.clear()

export const delete_ =
  <K>(key: K) =>
  (map: Map<K, unknown>): boolean =>
    map.delete(key)

export const entries = <K, V>(map: Map<K, V>): IterableIterator<[K, V]> => map.entries()

export const forEach =
  <K, V>(callbackfn: (value: V, key: K, map: Map<K, V>) => void) =>
  (map: Map<K, V>): void =>
    map.forEach(callbackfn)

export const get =
  <K>(key: K) =>
  <V>(map: Map<K, V>): V | undefined =>
    map.get(key)

export const has =
  <K>(key: K) =>
  (map: Map<K, unknown>): boolean =>
    map.has(key)

export const keys = <K>(map: Map<K, unknown>): IterableIterator<K> => map.keys()

export const set =
  <K, V>(key: K, value: V) =>
  (map: Map<K, V>): Map<K, V> =>
    map.set(key, value)

export const values = <V>(map: Map<unknown, V>): IterableIterator<V> => map.values()
