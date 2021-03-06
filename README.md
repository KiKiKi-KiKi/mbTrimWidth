# mbTrimWidth

[![NPM version](https://badgen.net/npm/v/mb-trimwidth)](https://www.npmjs.com/package/mb-trimwidth)
[![Build Status](https://travis-ci.com/KiKiKi-KiKi/mbTrimWidth.svg?branch=main)](https://travis-ci.com/github/KiKiKi-KiKi/mbTrimWidth/)
[![Coverage Status](https://coveralls.io/repos/github/KiKiKi-KiKi/mbTrimWidth/badge.svg?branch=main)](https://coveralls.io/github/KiKiKi-KiKi/mbTrimWidth?branch=main)
[![ISC License](http://img.shields.io/badge/license-ISC-green.svg?style=flat)](https://github.com/KiKiKi-KiKi/mbTrimWidth/blob/master/package.json)

A module of trim multibyte string by character width.
This will work even if contained Unicode, emoji, and surrogate pairs.

## install

```sh
$ npm install --save mb-trimwidth
```

## usage

```ts
import { mbTrimWidth } from 'mb-trimwidth';

const str1 = 'I love ๐๐ and ๐';
str1.length; // => 18

mbTrimWidth(str1, 9);
// => "I love ๐๐"

mbTrimWidth(str1, 9, 'โฆ');
// => "I love ๐โฆ"

const str2 = '๐ใฎๅคใฏ๐ ฎท้ๅฑใง๐ฉธฝใ้ฃในใใ๐';
str2.length; // => 19

mbTrimWidth(str2, 9);
// => "๐ใฎๅคใฏ๐ ฎท้ๅฑใง๐ฉธฝ"

mbTrimWidth(str2, 9, 'โฆ');
// => "๐ใฎๅคใฏ๐ ฎท้ๅฑใงโฆ"
```

## Test

```ts
import { mbTrimWidth } from 'mb-trimwidth';

const str = 'Lorem ipsum dolor sit amet';
mbTrimWidth(str, 10);
// => "Lorem ipsu"
mbTrimWidth(str, 10, 'โฆ');
// => "Lorem ipsโฆ"
mbTrimWidth(str, 0);
// => ""
mbTrimWidth(str, 1, 'โฆ');
// => "L"
mbTrimWidth(str, 1, '...');
// => "L"

const str = 'ๅญใใใฃใใใฎใใใใ็ซๅฃใใ็ชใใตใฟๆธๆฃใพใใงใใ';
mbTrimWidth(str, 12);
// => "ๅญใใใฃใใใฎใใใใ็ซ"
mbTrimWidth(str, 12, 'โฆ');
// => "ๅญใใใฃใใใฎใใใใโฆ"

const str = 'I love ๐๐ and ๐';
mbTrimWidth(str, 9);
// => "I love ๐๐"
mbTrimWidth(str, 9, 'โฆ');
// => "I love ๐โฆ"

const str = '็งใฏ๐๐ใจ๐ใใใพใ';
mbTrimWidth(str, 6);
// => "็งใฏ๐๐ใจ๐"
mbTrimWidth(str, 6, 'โฆ');
// => "็งใฏ๐๐ใจโฆ"

const str = '๐ใฎๅคใฏ๐ ฎท้ๅฑใง๐ฉธฝใ้ฃในใใ๐';
mbTrimWidth(str, 9);
// => "๐ใฎๅคใฏ๐ ฎท้ๅฑใง๐ฉธฝ"
mbTrimWidth(str, 9, 'โฆ');
// => "๐ใฎๅคใฏ๐ ฎท้ๅฑใงโฆ"
```
