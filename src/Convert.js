const Convert = {
    intArrToString: function(arr){
        return arr.map(ele => String.fromCharCode(ele)).join('');
    }
}