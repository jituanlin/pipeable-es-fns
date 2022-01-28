export const assign =
  <T>(target: T) =>
  <U>(source: U): T & U =>
    Object.assign(target, source)

export const create = Object.create

export const defineProperties = Object.defineProperties

export const defineProperty = Object.defineProperty

export const entries = Object.entries

export const freeze = Object.freeze

export const fromEntries = <T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k: string]: T } =>
  Object.fromEntries(entries)

export const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

export const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors

export const getOwnPropertyName = Object.getOwnPropertyNames

export const getOwnPropertySymbols = Object.getOwnPropertySymbols

export const getPrototypeOf = Object.getPrototypeOf

export const is =
  (value1: any) =>
  (value2: any): boolean =>
    Object.is(value1, value2)

export const isExtensible = Object.isExtensible

export const isFrozen = Object.isFrozen

export const isSeal = Object.isSealed

export const key = Object.keys

export const preventExtensions = Object.preventExtensions

export const seal = Object.seal

export const values = Object.values
