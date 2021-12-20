export const assign =
  <T>(target: T) =>
  <U>(source: U): T & U =>
    Object.assign(target, source)

export const create =
  (properties?: PropertyDescriptorMap) =>
  (o: object | null): any =>
    properties === undefined ? Object.create(o) : Object.create(o, properties)

export const defineProperties =
  (properties: PropertyDescriptorMap & ThisType<any>) =>
  <T>(o: T): T =>
    Object.defineProperties(o, properties)

export const defineProperty =
  (attributes: PropertyDescriptor & ThisType<any>) =>
  (p: PropertyKey) =>
  <T>(o: T): T =>
    Object.defineProperty(o, p, attributes)

export const entries = Object.entries.bind(Object)

export const freeze = Object.freeze.bind(Object)

export const fromEntries = <T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k: string]: T } =>
  Object.fromEntries(entries)

export const getOwnPropertyDescriptor = (p: PropertyKey) => (o: any) => Object.getOwnPropertyDescriptor(o, p)

export const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors.bind(Object)

export const getOwnPropertyName = Object.getOwnPropertyNames.bind(Object)

export const getOwnPropertySymbols = Object.getOwnPropertySymbols.bind(Object)

export const getPrototypeOf = Object.getPrototypeOf.bind(Object)

export const is =
  (value1: any) =>
  (value2: any): boolean =>
    Object.is(value1, value2)

export const isExtensible = Object.isExtensible.bind(Object)

export const isFrozen = Object.isFrozen.bind(Object)

export const isSeal = Object.isSealed.bind(Object)

export const key = Object.keys.bind(Object)

export const preventExtensions = Object.preventExtensions.bind(Object)

export const seal = Object.seal.bind(Object)

export const values = Object.values.bind(Object)
