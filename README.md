# Safe JSON.parse()

no exception.

You don't need to write try-catch in everywhere.

## Install

```
npm install @thaddeusjiang/safejsonparse
```

## Usage

```
import safeJSONparse from '@thaddeusjiang/safejsonparse'

safeJSONparse('') // null

safeJSONparse('{ "value": wrong JSON }') // null

safeJSONparse('{ "name": "TJ" }') // { "name": "TJ" }

safeJSONparse('[1,2,3]') // [1,2,3]
```
