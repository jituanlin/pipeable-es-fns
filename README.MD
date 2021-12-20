# curried-es-fns

本仓库意欲使用柯里化过的ES6+原生方法代替*ramda*和*lodash*.

其意义在于:

0. 支持函数式管道流操作
1. 类型友好, 详见[为什么不适合在Typescript项目中使用Ramda和Lodash]()
2. 打包体积和运行速度: 只是对原生ES6+方法进行简单的柯里化封装

## 代码示例:

```typescript
import {array, object} from '../src'
import {pipe} from '../src/fn'

const a = pipe(
    [1, 2, 3],
    array.map((a) => [a, a] as const),
    object.fromEntries
)

```
