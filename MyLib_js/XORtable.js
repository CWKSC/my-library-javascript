function XORtable(target = 'print_r(scandir(".")', ok = "0123456789-*|^~"){
    aArr = [];
    bArr = [];
    cArr = [];
    for (var tar of target)
    {
        leave = false;
        for (var a of ok) {
            for (var b of ok) {
                for (var c of ok) {
                    if ((a.charCodeAt(0) ^ b.charCodeAt(0) ^ c.charCodeAt(0)) == tar.charCodeAt(0))
                    {
                        console.log("tar = " + tar + ", a = " + a + ", b = " + b + ", c = " + c);
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
    }
    console.log("\'" + aArr.join('') + "\'^\'" + bArr.join('') + "\'^\'" + cArr.join('') + "\'");
    return [aArr, bArr, cArr];
}