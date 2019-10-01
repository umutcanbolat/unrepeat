# unrepeat

[![Build Status](https://travis-ci.org/umutcanbolat/unrepeat.svg?branch=master)](https://travis-ci.org/umutcanbolat/unrepeat)

<!-- [![Build status](https://img.shields.io/travis/umutcanbolat/reverse-repeat/master.svg?style=flat)](https://travis-ci.org/umutcanbolat/reverse-repeat)
[![Test coverage](https://img.shields.io/codecov/c/github/umutcanbolat/reverse-repeat.svg?style=flat)](https://codecov.io/gh/umutcanbolat/reverse-repeat)
[![NPM version](https://img.shields.io/npm/v/reverse-repeat.svg?style=flat)](https://www.npmjs.com/package/reverse-repeat)
[![NPM Downloads](https://img.shields.io/npm/dm/reverse-repeat.svg?style=flat)](https://www.npmjs.com/package/reverse-repeat) -->

The inverse of the javascript's [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) method.

<!-- ## Install

```sh
npm install unrepeat --save
```

```sh
yarn add unrepeat
``` -->

## Usage

```javascript
import unrepeat from 'unrepeat';

'foobar'.repeat(3);
//=> 'foobarfoobarfoobar'

unrepeat('foobarfoobarfoobar').repeated;
//=> 'foobar'

unrepeat('foobarfoobarfoobar').count;
//=> 3

var chorus = "Because I'm happy. ";
chorus.repeat(3);
//=> 'Because I'm happy. Because I'm happy. Because I'm happy. '

unrepeat(chorus.repeat(3));
//=> { repeated: 'Because I\'m happy. ', count: 3 }
```

## Credits

Developed by [Umut Canbolat](https://github.com/umutcanbolat).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
