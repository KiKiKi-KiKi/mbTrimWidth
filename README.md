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

const str1 = 'I love 🏄🌊 and 🏕';
str1.length; // => 18

mbTrimWidth(str1, 9);
// => "I love 🏄🌊"

mbTrimWidth(str1, 9, '…');
// => "I love 🏄…"

const str2 = '🌕の夜は𠮷野屋で𩸽を食べたい😇';
str2.length; // => 19

mbTrimWidth(str2, 9);
// => "🌕の夜は𠮷野屋で𩸽"

mbTrimWidth(str2, 9, '…');
// => "🌕の夜は𠮷野屋で…"
```

## Test

```ts
import { mbTrimWidth } from 'mb-trimwidth';

const str = 'Lorem ipsum dolor sit amet';
mbTrimWidth(str, 10);
// => "Lorem ipsu"
mbTrimWidth(str, 10, '…');
// => "Lorem ips…"
mbTrimWidth(str, 0);
// => ""
mbTrimWidth(str, 1, '…');
// => ""
mbTrimWidth(str, 1, '...');
// => 'L'

const str = '子もかっこうの「おじぎ猫団」を窓がふみ戸棚ましです。';
mbTrimWidth(str, 12);
// => "子もかっこうの「おじぎ猫"
mbTrimWidth(str, 12, '…');
// => "子もかっこうの「おじぎ…"

const str = 'I love 🏄🌊 and 🏕';
mbTrimWidth(str, 9);
// => "I love 🏄🌊"
mbTrimWidth(str, 9, '…');
// => "I love 🏄…"

const str = '私は🏄🌊と🏕をします';
mbTrimWidth(str, 6);
// => "私は🏄🌊と🏕"
mbTrimWidth(str, 6, '…');
// => "私は🏄🌊と…"

const str = '🌕の夜は𠮷野屋で𩸽を食べたい😇';
mbTrimWidth(str, 9);
// => "🌕の夜は𠮷野屋で𩸽"
mbTrimWidth(str, 9, '…');
// => "🌕の夜は𠮷野屋で…"
```
