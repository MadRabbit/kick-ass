# KickAss

This is a simple benchmarking tool and regressive testing utility
for the lovely.io [dom package](/packages/dom).

## How To Run

Checkout the repo, then install `lovely` and related packages.

```
npm install lovely -g
lovely bootstrap
lovely install dom-1.4.2 ui-2.1.2
```

Then run the `lovely server` from the repo's root and open up
[http://localhost:3000/test](http://localhost:3000/test)


## Disclamer

This utility was created to get accurate performance measurments
on the lovely.io project and fine tune its logic.

The fact that other frameworks don't look good in the tests is
not the fault neither intention of this untility. It's just what it is.


## Copyright And License

This project is released under the terms of the MIT license

Copyright (C) 2013 Nikolay Nemshilov
