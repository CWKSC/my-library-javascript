# mylib_js

https://cwksc.github.io/mylib_js/  (Open console to use)

> [!NOTE]
>
> Mainly contain some CTF tool

## Embedded

https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/MyLib_js.js

```html
<script type="text/javascript" 
        src="https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/MyLib_js.js"
        async> </script>
```

## CTFTool

### Function

#### intToHexStringByEndian(input, LSB = false)

```js
function intToHexStringByEndian(input, LSB = false);

(113626824).toString(16)
-> "6c5cec8"
intToHexStringByEndian(113626824)
-> "\x06\xc5\xce\xc8"
intToHexStringByEndian(113626824, true)
-> "\xc8\xce\xc5\x06"
```

#### XORTable(target = 'print_r(scandir(".")', availableSet = "0123456789-*|^~")

```js
function XORTable(
    target = 'print_r(scandir(".")',
    availableSet = "0123456789-*|^~"
);

// Example
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

#### BruteForceString(n)

```js
new CTFTool.BruteForceString(n);
function filter(
    condition,
    indexSet,
    sets = Array(indexSet.length).fill(CTFTool.printableAsciiIntArray)
);
function display(n = 20);

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

// Example 2
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

#### BruteForceString_backTracking(n)

```js
new CTFTool.BruteForceString_backTracking(n);
function add(
    condition,
    indexSet = [],
    sets = Array(indexSet.length).fill(defaultSet)
);
function run(
    onlyOneResult = false,
    showConditionMatch = false, showTarget = false,
    showNotFind = false
);

// Example 1 - "flag" Brute Force Process
new CTFTool.BruteForceString_backTracking(4)
.add(a => a[0] + a[1] == 210)
.add(a => a[1] + a[2] == 205)
.add(a => a[2] + a[3] == 200)
.add(a => a[0] - a[1] == -6)
.run(true, true);

// Condition match [aq  ]
// Condition match [aq\ ]
// Condition match [aq\l]
// Condition match [bp  ]
// Condition match [bp] ]
// Condition match [bp]k]
// Condition match [co  ]
// Condition match [co^ ]
// Condition match [co^j]
// Condition match [dn  ]
// Condition match [dn_ ]
// Condition match [dn_i]
// Condition match [em  ]
// Condition match [em` ]
// Condition match [em`h]
// Condition match [fl  ]
// Condition match [fla ]
// Condition match [flag]
// Condition match [flag]
// [[[ result: [flag] ]]]


// Example 2 - DiceCTF rev/babymix as testcase
// know the result, and just some char is missing (become '\0') 
var flag = new CTFTool.BruteForceString_backTracking(22)
flag.target = "m1x\0\0t_4ll_t\0ge\0h3r!1!"
flag
.add(a => a[12] - a[17] + a[12] + a[8] == 153)
.add(a => a[10] + a[21] + (a[19] ^ a[2]) == 217)
.add(a => (a[5] ^ a[16]) + a[16] + a[3] + (a[0] ^ a[16]) == 232)
.add(a => a[10] + a[3] + a[3] - a[19] + (a[19] ^ a[0]) == 328)
.add(a => a[10] - a[8] + a[2] - a[19] == 74)
.add(a => a[17] - a[1] + a[4] + a[11] + a[17] - a[9] == 166)
.add(a => a[14] + a[10] + a[18] - a[9] + a[5] + a[10] == 413)
.add(a => a[5] - a[16] + a[8] - a[12] + a[17] - a[13] + a[11] - a[2] + a[1] + a[21] == 98)
.add(a => (a[19] ^ a[13]) + a[6] - a[13] + a[17] - a[11] + (a[16] ^ a[12]) == 85)
.add(a => a[4] - a[16] + (a[2] ^ a[7]) == 77)
.add(a => a[8] - a[17] + a[14] - a[3] + (a[8] ^ a[14]) + a[5] + a[1] + a[7] + a[10] == 384)
.add(a => a[4] - a[0] + a[2] - a[4] + a[15] - a[21] + a[17] + a[2] == 265)
.add(a => a[5] - a[18] + a[17] - a[4] + a[15] + a[2] + a[21] - a[18] + a[7] + a[6] == 250)
.add(a => a[21] - a[19] + a[7] - a[18] + a[16] - a[21] + (a[12] ^ a[18]) == 75)
.add(a => (a[10] ^ a[2]) + a[2] + a[7] + a[20] + a[13] + (a[3] ^ a[16]) + a[9] + a[6] == 621)
.add(a => a[8] - a[3] + (a[14] ^ a[2]) + a[11] + a[0] + a[1] - a[19] == 283)
.add(a => a[16] - a[14] + (a[0] ^ a[11]) + (a[0] ^ a[14]) + a[13] - a[19] == 106)
.add(a => a[19] + a[10] + a[10] + a[19] + a[0] - a[20] + a[3] - a[18] == 297)
.add(a => a[0] - a[15] + a[20] + a[18] == 156)
.add(a => a[13] - a[8] + a[10] - a[20] + a[3] - a[17] == 85)
.add(a => a[3] - a[17] + a[19] + a[4] + (a[12] ^ a[17]) + a[10] - a[2] == 160)
.add(a => a[11] - a[21] + a[12] - a[10] == 36)
.add(a => (a[18] ^ a[19]) + a[6] - a[16] + (a[5] ^ a[16]) == 102)
.add(a => a[6] - a[13] + (a[10] ^ a[15]) + a[21] - a[5] == -48)
.add(a => (a[5] ^ a[3]) + a[12] - a[11] + (a[6] ^ a[4]) == 29)
.add(a => a[6] - a[14] + a[9] - a[2] + a[8] - a[15] + a[21] - a[11] == -109)
.add(a => a[19] - a[7] + a[0] + a[16] + a[11] + a[17] == 361)
.add(a => a[3] + a[15] + (a[15] ^ a[19]) == 296)
.run(true)
//  [[[ result: [m1x_it_4ll_t0geth3r!1!] ]]]
```

