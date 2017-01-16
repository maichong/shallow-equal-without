# shallow-equal-without
Shallow equal check object without specified properties.

```js

import shallowEqualWithout from 'shallow-equal-without';

let a = { foo: 123, bar:'string', baz:true };
let b = { foo: 123, bar:'string'};

shallowEqualWithout(a,b,'baz'); // true
```
