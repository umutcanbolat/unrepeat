# unrepeat

[![NPM version](https://img.shields.io/npm/v/unrepeat.svg?style=flat)](https://www.npmjs.com/package/unrepeat)
![NPM](https://img.shields.io/npm/l/unrepeat)

Find the shortest repeating pattern in a string.

> This package is ESM only and requires Node.js 20 or later.

## Install

```sh
npm install unrepeat
# or
pnpm add unrepeat
# or
yarn add unrepeat
```

## Usage

```javascript
import unrepeat from 'unrepeat';

unrepeat('abcabcabc');
//=> {pattern: 'abc', count: 3}

unrepeat('hello');
//=> {pattern: 'hello', count: 1}
```

## License

[MIT](LICENSE) © Umut Canbolat
