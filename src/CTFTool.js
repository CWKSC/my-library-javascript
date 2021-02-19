const CTFTool = {
    
digitString: "0123456789",
digitArray: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
digitIntArray: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],

lowercaseLetterString: "abcdefghijklmnopqrstuvwxyz",
lowercaseLetterArray: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
lowercaseLetterIntArray: [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122],

uppercaseLetterString: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
uppercaseLetterArray: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
uppercaseLetterIntArray: [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],

printableAsciiString: " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
printableAsciiArray: [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~"],
printableAsciiIntArray: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126],

commonLetterString: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !{}_\"#$%&'()*+,-./:;<=>?@[\\]^`|~",
commonLetterArray: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "!", "{", "}", "_", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "`", "|", "~"],
commonLetterIntArray: [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 32, 33, 123, 125, 95, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 124, 126],

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

XORTable: function(target = 'print_r(scandir(".")', availableSet = CTFTool.printableAsciiString){
    aArr = []; bArr = []; cArr = [];
    for (var tar of target)
    {
        leave = false;
        loop:
        for (var a of availableSet) {
            for (var b of availableSet) {
                for (var c of availableSet) {
                    if ((a.charCodeAt(0) ^ b.charCodeAt(0) ^ c.charCodeAt(0)) == tar.charCodeAt(0))
                    {
                        console.log(`'${a}'^'${b}'^'${c}' = ${tar}`);
                        aArr.push(a); bArr.push(b); cArr.push(c);
                        leave = true;
                        break loop;
                    }       
                }
            }
        }
        if(leave == false) console.log("target = " + tar + " can not find");
    }
    console.log("\'" + aArr.join('') + "\'^\'" + bArr.join('') + "\'^\'" + cArr.join('') + "\'");
    return [aArr, bArr, cArr];
},
Test_XORTable: function() {
    console.log(`XORTable('print_r(scandir(".")', "0123456789-*|^~");`);
    CTFTool.XORTable('print_r(scandir(".")', "0123456789-*|^~");
},
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

BruteForceString: function(n, defaultSet = CTFTool.printableAsciiIntArray){
    this.data = [Array(n).fill(0)];
    this.defaultSet = defaultSet;
    this.filter = function(condition, indexSet = [], sets = Array(indexSet.length).fill(defaultSet)){
        var result = [];
        //console.log(condition, indexs, sets);
        
        if(indexSet.length == 0){
            indexSet = condition.toString().match(/\[(.+?)\]/g)
                .map(ele => parseInt(ele.substring(1, ele.length - 1)));
            if(sets.length == 0){
                sets = Array(indexSet.length).fill(defaultSet);
            }
        }

        this.data.forEach(target => {
            var tempIndexSet = Array.from(indexSet);
            var tempSets = Array.from(sets);
            for(let i = 0; i < tempIndexSet.length; i++){
                // console.log("tempIndexSet: ", tempIndexSet, "i: ", i);
                if(target[tempIndexSet[i]] != 0){
                    tempIndexSet.splice(i, 1);
                    tempSets.splice(i, 1);
                    i--;
                }
            }
            if(tempIndexSet.length == 0){
                if(condition(target)) result.push(target);
                return;
            }
            // console.log("tempIndexSet: ", tempIndexSet);
            
            var refer = Array(tempIndexSet.length);
            for(let i = 0; i < tempIndexSet.length; i++){
                //console.log("Sets: ", tempSets, "tempIndexSet[i]: ", tempIndexSet[i]);
                refer[i] = tempSets[i].length;
            }
            // console.log(refer);
    
            AdvanceLooping.CombinationLoop(refer, indexs => {
                let values = indexs.map((ele, i) => tempSets[i][ele]);
    
                var temp = Array.from(target);
                tempIndexSet.forEach((index, i) => temp[index] = values[i]);
    
                if(condition(temp)) result.push(temp);
            });
        });
        if(result.length != 0) {
            this.data = result;
        }
        else {
            console.log(`No possible string met ${condition} condition, this will return the previous result`);
        }
        return this;
    };
    this.display = function(n = 20){
        for(var i = 0; i < n && i < this.data.length; i++){
            console.log(this.data[i].map(ele => String.fromCharCode(ele)).join(''));
        }
        return this;
    }
},
Test_BruteForceString: function(){
    new CTFTool.BruteForceString(6)
    .filter(a => a[0] + a[1] == 210, [0, 1])
    .filter(a => a[1] + a[2] == 205, [1, 2])
    .filter(a => a[2] + a[3] == 200, [2, 3])
    .filter(a => a[0] - a[1] == -6, [0, 2])
    .filter(a => a[0] - a[3] == -1, [0, 3])
    .filter(a => a[0] + a[4] == 225, [0, 4])
    .filter(a => a[3] * a[5] == 12875, [3, 5])
    .display();
},

BruteForceString_backTracking: function(n, defaultSet = CTFTool.commonLetterIntArray){
    this.target = null
    this.defaultSet = defaultSet;
    this.conditionList = [];
    this.add = function(condition, indexSet = [], sets = Array(indexSet.length).fill(defaultSet)){
        if(indexSet.length == 0){
            indexSet = condition.toString().match(/\[(.+?)\]/g)
                .map(ele => parseInt(ele.substring(1, ele.length - 1)));
            indexSet = [...new Set(indexSet)];
            if(sets.length == 0){
                sets = Array(indexSet.length).fill(defaultSet);
            }
        }
        this.conditionList.push({condition: condition, indexSet: indexSet, sets: sets});
        return this;
    };
    this.getConditionList = function*(){
        let i = 0;
        while(true){
            switch(yield {i: i, conditionList: this.conditionList[i]}){
                case "prev": i += -1; break;
                case "current": break;
                default: i += 1; break;
            }
        }
    }
    this.run = function(onlyOneResult = false, showConditionMatch = false, showTarget = false, showNotFind = false){
        let conditionStep = this.getConditionList();
        var target_temp = Array(n).fill(0);
        if(this.target != null){
            this.target.split('').map(ele => ele.charCodeAt())
                .forEach((ele, i) => target_temp[i] = ele);
        }
        return Pattern.backTracking({
            target:         target_temp, 
            indexStep:      null,
            targetIndexSet: null,
            targetSets:     null,
            refer:          null
        }, 
        state => {
            //et target        = [...state.target];

            let currentCondition = conditionStep.next("current").value;
            if(currentCondition.conditionList == undefined){ 
                console.log("undefined");
                return [-1];
            }
            let condition     = currentCondition.conditionList.condition;
            let indexSet      = currentCondition.conditionList.indexSet;
            let sets          = currentCondition.conditionList.sets;

            if(showTarget)
                console.log("target: [" + Convert.intArrToString(state.target) + "]");
            // console.log("Current condition: ", condition);
            // console.log("targetIndexSet: ", state.targetIndexSet);
            // console.log("targetSets: ", state.targetSets);

            if(state.indexStep != null){
                // console.log("[prev] IndexStep", state.indexStep.next().value);
                while(true){
                    let indexs = state.indexStep.next().value;
                    if(indexs == undefined) break;
                    let values = indexs.map((ele, i) => state.targetSets[i][ele]);
                    state.targetIndexSet.forEach((index, i) => state.target[index] = values[i]);
                    if(condition(state.target)){
                        if(showConditionMatch)
                            console.log("Condition match [" + Convert.intArrToString(state.target) + "]");
                        return [1, {
                            target:         [...state.target],
                            indexStep:      null,
                            targetIndexSet: null,
                            targetSets:     null,
                            refer:          null
                        }];
                    }
                }
                //console.log("[prev] Not Find", condition);
                return [-1];
            }

            state.targetIndexSet = [...indexSet];
            state.targetSets = [...sets];
            for(let i = 0; i < state.targetIndexSet.length; i++) {
                if(state.target[state.targetIndexSet[i]] != 0) {
                    state.targetIndexSet.splice(i, 1);
                    state.targetSets.splice(i, 1);
                    i--;
                }
            }

            if(state.targetIndexSet.length == 0){
                if(condition(state.target)){
                    if(showConditionMatch)
                        console.log("Condition match [" + Convert.intArrToString(state.target) + "]");
                    // console.log("[no targetIndexSet] Condition match", this.intArrToString(target));
                    return [1, {
                        target:         [...state.target],
                        indexStep:      null,
                        targetIndexSet: null,
                        targetSets:     null,
                        refer:          null
                    }]; 
                }
                // console.log("[no targetIndexSet] no Find");
                return [-1];
            }
            // console.log("test");
            
            state.refer = Array(state.targetIndexSet.length);
            for(let i = 0; i < state.targetIndexSet.length; i++){
                state.refer[i] = state.targetSets[i].length;
            }
            //console.log("refer:", state.refer);

            state.indexStep = AdvanceLooping.CombinationLoop_stepable(state.refer);
            while(true){
                let indexs = state.indexStep.next().value;
                if(indexs == undefined) break;
                let values = indexs.map((ele, i) => state.targetSets[i][ele]);
                state.targetIndexSet.forEach((index, i) => state.target[index] = values[i]);
                if(condition(state.target)){
                    if(showConditionMatch)
                        console.log("Condition match [" + Convert.intArrToString(state.target) + "]");
                    return [1, {
                        target:         [...state.target],
                        indexStep:      null,
                        targetIndexSet: null,
                        targetSets:     null,
                        refer:          null
                    }];
                }
            }

            if(showNotFind)
                console.log("Not Find");
            return [-1];
        }, 
        // whenStep //
        state => {
            conditionStep.next();

            // End //
            if(onlyOneResult){
                if(conditionStep.next("current").value.i == this.conditionList.length){
                    console.log("%c [[[ result: [" + Convert.intArrToString(state.target) + "] ]]]", "color:red;");
                    return [0];
                }
            }
            if(conditionStep.next("current").value.i == -1){
                console.log("End");
                return [0];
            }

            // Prev //
            if(conditionStep.next("current").value.i == this.conditionList.length){
                console.log("%c [[[ result: [" + Convert.intArrToString(state.target) + "] ]]]", "color:red;");
                return [-1];
            }
        },
        // whenPrev //
        state => {
            conditionStep.next("prev");
        },
        // whenEnd //
        null);
    };
},


}


