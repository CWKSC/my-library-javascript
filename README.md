[cwksc.github.io/mylib_js/](https://cwksc.github.io/MyLib_js/) or you can download it and use `forLocal.html`

### MyLib_js

https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/MyLib_js.js

```html
<script type="text/javascript" 
        src="https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/MyLib_js.js"
        async> </script>
```

### CTFTool

https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/src/CTFTool.js

```html
<script type="text/javascript" 
        src="https://cdn.jsdelivr.net/gh/CWKSC/MyLib_js/src/CTFTool.js"
        async> </script>
```

### Usage

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

