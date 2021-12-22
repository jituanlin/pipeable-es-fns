export const add =
  <T>(value: T) =>
  (set: Set<T>): Set<T> =>
    set.add(value)

export const clear = (set: Set<unknown>): void => set.clear()

export const delete_ =
  <T>(value: T) =>
  (set: Set<T>): boolean =>
    set.delete(value)

export const entries = <T>(set: Set<T>): IterableIterator<[T, T]> => set.entries()

export const forEach =
  <T>(callbackfn: (value: T, value2: T, set: Set<T>) => void) =>
  (set: Set<T>): void =>
    set.forEach(callbackfn)

export const has =
  <T>(value: T) =>
  (set: Set<T>): boolean =>
    set.has(value)

export const values = <T>(set: Set<T>): IterableIterator<T> => set.values()

export const size = <T>(set: Set<T>): number => set.size
