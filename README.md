# unrepeat

[![Build Status](https://travis-ci.org/umutcanbolat/unrepeat.svg?branch=master)](https://travis-ci.org/umutcanbolat/unrepeat)
[![Conventional Changelog](https://img.shields.io/badge/changelog-conventional-brightgreen.svg)](https://github.com/conventional-changelog)
[![Test coverage](https://img.shields.io/codecov/c/github/umutcanbolat/unrepeat.svg?style=flat)](https://codecov.io/gh/umutcanbolat/unrepeat)
[![NPM version](https://img.shields.io/npm/v/unrepeat.svg?style=flat)](https://www.npmjs.com/package/unrepeat)
![NPM](https://img.shields.io/npm/l/unrepeat)

The missing inverse of the javascript's [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) method.

## Install

```sh
npm install unrepeat
```

```sh
yarn add unrepeat
```

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

## Conributing

PR's are always welcome. There is only one thing to know before contributing. Commit messages must comply with [conventional commits](https://www.conventionalcommits.org). Otherwise [husky](https://github.com/typicode/husky) will complain. :)

Thanks to [commitizen](https://github.com/commitizen), `npm run commit` command can be used to create commit messages complying with conventional commits.

## Releasing

See [RELEASING](RELEASING.md) for details.

## Credits

Developed by [Umut Canbolat](https://github.com/umutcanbolat).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
