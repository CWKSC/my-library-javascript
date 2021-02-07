var AdvanceLooping = {

CombinationLoop: function(refer, action)
{
    var indexs = Array(refer.length).fill(0);
    while (true)
    {
        action(indexs);
        indexs[indexs.length - 1]++;
        for (var i = refer.length - 1; i >= 0; i--)
        {
            if (indexs[i] < refer[i]) break;
            if (i == 0) return refer;
            indexs[i] = 0;
            indexs[i - 1]++;
        }
    };
},
Test_CombinationLoop: function(){
    console.log("CombinationLoop([1, 2, 3], console.log)");
    CombinationLoop([1, 2, 3], console.log);
}


}