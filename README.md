https://cwksc.github.io/MyLib_js/  (Open your console to use)

## MyLib_js

https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/MyLib_js.js

```html
<script type="text/javascript" 
        src="https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/MyLib_js.js"
        async> </script>
```

## CTFTool

https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/src/CTFTool.js

```html
<script type="text/javascript" 
        src="https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/src/CTFTool.js"
        async> </script>
```

### Function

```js
function intToHexStringByEndian(input, LSB = false)

(113626824).toString(16)
-> "6c5cec8"
intToHexStringByEndian(113626824)
-> "\x06\xc5\xce\xc8"
intToHexStringByEndian(113626824, true)
-> "\xc8\xce\xc5\x06"
```

```js
function XORTable(target = 'print_r(scandir(".")', availableSet = "0123456789-*|^~")

// Example //
XORTable('print_r(scandir(".")', "0123456789-*|^~");

'4'^'8'^'|' = p
'4'^'8'^'~' = r
'8'^'-'^'|' = i
'8'^'*'^'|' = n
'0'^'8'^'|' = t
'0'^'1'^'^' = _
'4'^'8'^'~' = r
'0'^'2'^'*' = (
'4'^'9'^'~' = s
'0'^'-'^'~' = c
'0'^'-'^'|' = a
'8'^'*'^'|' = n
'0'^'*'^'~' = d
'8'^'-'^'|' = i
'4'^'8'^'~' = r
'0'^'2'^'*' = (
'0'^'8'^'*' = "
'0'^'3'^'-' = .
'0'^'8'^'*' = "
'0'^'3'^'*' = )
'44880040400808400000'^'88-*81829--**-828383'^'|~|||^~*~~||~|~**-**'

-> [Array(20), Array(20), Array(20)]
0: (20) ["4", "4", "8", "8", "0", "0", "4", "0", "4", "0", "0", "8", "0", "8", "4", "0", "0", "0", "0", "0"]
1: (20) ["8", "8", "-", "*", "8", "1", "8", "2", "9", "-", "-", "*", "*", "-", "8", "2", "8", "3", "8", "3"]
2: (20) ["|", "~", "|", "|", "|", "^", "~", "*", "~", "~", "|", "|", "~", "|", "~", "*", "*", "-", "*", "*"]
```

### Class

```js
BruteForceString(n)
function filter(condition, indexSet, sets = Array(indexSet.length).fill(CTFTool.printableAsciiIntArray))
function display(n = 20)

// Example 1 //
var flag = new CTFTool.BruteForceString(6)
.filter(a => a[0] + a[1] == 210, [0, 1])
.filter(a => a[1] + a[2] == 205, [1, 2])
.filter(a => a[2] + a[3] == 200, [2, 3]);

flag.display();
// T~Oy
// U}Px
// V|Qw
// W{Rv
// XzSu
// YyTt
// ZxUs
// [wVr
// \vWq
// ]uXp
// ^tYo
// _sZn
// `r[m
// aq\l
// bp]k
// co^j
// dn_i
// em`h
// flag
// gkbf

flag.filter(a => a[0] - a[1] == -6, [0, 2])
flag.display();
// flag

// Example 2 //
new CTFTool.BruteForceString(6)
.filter(a => a[0] + a[1] == 210, [0, 1])
.filter(a => a[1] + a[2] == 205, [1, 2])
.filter(a => a[2] + a[3] == 200, [2, 3])
.filter(a => a[0] - a[1] == -6, [0, 2])
.filter(a => a[0] - a[3] == -1, [0, 3])
.filter(a => a[0] + a[4] == 225, [0, 4])
.filter(a => a[3] * a[5] == 12875, [3, 5])
.display();
// flag{}
```

