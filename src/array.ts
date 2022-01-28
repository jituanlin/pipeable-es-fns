export const concat =
  <T>(left: T[]) =>
  (right: T[]): T[] =>
    left.concat(right)

export const entries = <T>(array: T[]): IterableIterator<[number, T]> => array.entries()

export const every =
  <T>(predicate: (element: T) => boolean) =>
  (array: T[]): boolean =>
    array.every(predicate)

export const fill =
  <T>(value: T) =>
  (array: T[]): T[] =>
    array.fill(value)

export const filter =
  <T>(predicate: (element: T) => boolean) =>
  (array: T[]): T[] =>
    array.filter(predicate)

export const find =
  <T>(predicate: (element: T, index: number, array: T[]) => boolean) =>
  (array: T[]): T | undefined =>
    array.find(predicate)

export const findIndex =
  <T>(predicate: (element: T, index: number, array: T[]) => boolean) =>
  (array: T[]): number =>
    array.findIndex(predicate)

export const flat =
  <D extends number>(depth: D) =>
  <T>(array: T[]): FlatArray<T[], D>[] =>
    array.flat(depth)

export const flatMap =
  <T, U>(callbackfn: (element: T, index: number, array: T[]) => U | U[]) =>
  (array: T[]): U[] =>
    array.flatMap(callbackfn)

export const forEach =
  <T>(callbackfn: (element: T, index: number, array: T[]) => void) =>
  (array: T[]): void =>
    array.forEach(callbackfn)

export const from = Array.from

export const includes =
  <T>(searchElement: T) =>
  (array: T[]): boolean =>
    array.includes(searchElement)

export const indexOf =
  <T>(searchElement: T, fromIndex = 0) =>
  (array: T[]): number =>
    array.indexOf(searchElement, fromIndex)

export const isArray = Array.isArray.bind(Array)

export const join =
  (separator: string) =>
  (array: unknown[]): string =>
    array.join(separator)

export const keys = (array: unknown[]): IterableIterator<number> => array.keys()

export const map =
  <T, U>(callbackfn: (element: T, index: number, array: T[]) => U) =>
  (array: T[]) =>
    array.map(callbackfn)

export const of = Array.of

export const pop = <T>(array: T[]): T | undefined => array.pop()

export const push =
  <T>(...items: T[]) =>
  (array: T[]): number =>
    array.push(...items)

export const reduce =
  <T>(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T) =>
  (initialValue: T) =>
  (array: T[]): T =>
    array.reduce(callbackfn, initialValue)

export const reduceRight =
  <T>(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T) =>
  (initialValue: T) =>
  (array: T[]): T =>
    array.reduceRight(callbackfn, initialValue)

export const reverse = <T>(array: T[]): T[] => array.reverse()

export const shift = <T>(array: T[]): T | undefined => array.shift()

export const slice =
  (start: number, end: number) =>
  <T>(array: T[]): T[] =>
    array.slice(start, end)

export const some =
  <T>(predicate: (value: T, index: number, array: T[]) => boolean) =>
  (array: T[]): boolean =>
    array.some(predicate)

export const sort = <T>(array: T[]): T[] => array.sort()

export const splice =
  (start: number, deleteCount: number) =>
  <T>(...items: T[]) =>
  (array: T[]): T[] =>
    array.splice(start, deleteCount, ...items)

export const toLocaleString = (array: unknown[]): string => array.toLocaleString()

export const toString = (array: unknown[]): string => array.toString()

export const unshift =
  <T>(...items: T[]) =>
  (array: T[]): number =>
    array.unshift(...items)

export const values = <T>(array: T[]): IterableIterator<T> => array.values()
