# getV
>get object value

## Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save get-ov
```

## Usage
```js
import getV from 'get-ov';

const o = {a:{b:3}};
const gv = getV(o);
console.log(gv()); //=> {a:{b:3}}
console.log(gv('a')); //=> {b:3}
console.log(gv('a','b')); //=> 3
console.log(gv('a','b','c')); //=> undefined

const arr = [[1]]
console.log(getV(arr)(0,0)); //=> 1
```