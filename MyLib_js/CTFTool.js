var CTFTool = {

intToHexStringByEndian: function(input, LSB = false){
    var hexString = input.toString(16);
    if(hexString.length % 2 != 0){
        hexString = '0' + hexString;
    }
    var splitEveryTwoChar = hexString.match(/.{1,2}/g);
    if(LSB == true) splitEveryTwoChar = splitEveryTwoChar.reverse();
    return splitEveryTwoChar.map(ele => "\\x" + ele).join('');
},

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
                        console.log("target = " + tar + ", a = " + a + ", b = " + b + ", c = " + c);
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

}
