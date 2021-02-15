const Pattern = {
    returnState: Object.freeze({step: 1, prev: -1, end: 0}),
    backTracking: function (init, f, stepBack = null, stepEnd = null){
        var states = [init];
        while(true){
            if(states.length == 0) return [];
            var result = f(states[states.length - 1]);
            switch(result[0]){
                case this.returnState.step: 
                    if(stepEnd != null && stepEnd(result[1])){
                        return states; // end
                    }
                    if(stepBack != null && stepBack(result[1])){
                        states.pop(); break; // prev
                    }
                    states.push(result[1]); break;
                case this.returnState.prev: states.pop(); break;
                case this.returnState.end:  
                    if(result.length == 2) states.push(result[1]);
                    return states;
            }
        }

    }

}