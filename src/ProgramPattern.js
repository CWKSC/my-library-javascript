const Pattern = {
    returnState: Object.freeze({step: 1, prev: -1, end: 0, repeat: 2}),
    backTracking: function (init, f, 
        whenStep = null, whenPrev = null, whenEnd = null){
        var states = [init];
        while(true){
            if(states.length == 0) return [];
            var result = f(states[states.length - 1]);
            function step(){
                if(whenStep != null) {
                    let temp = whenStep(result[1]);
                    if(temp != undefined) {
                        router(temp[0]);
                    }
                }
                states.push(result[1]);
            }
            function prev(){
                if(whenPrev != null) { 
                    let temp = whenPrev(result[1]);
                    if(temp != undefined) {
                        router(temp[0]);
                    }
                }
                states.pop();
            }
            function end(){
                if(whenEnd != null) {
                    let temp = whenEnd(result[1]);
                    if(temp != undefined) {
                        router(temp[0]);
                    }
                }
                if(result.length == 2) { states.push(result[1]); }
                throw states;
            }
            function router(returnState){
                switch(returnState){
                    case Pattern.returnState.step: step(); break;
                    case Pattern.returnState.prev: prev(); break;
                    case Pattern.returnState.end:  end(); break;
                    case Pattern.returnState.repeat: break;
                    default: break;
                }
            }
            try {
                router(result[0]);
            } catch (returnValue) {
                return returnValue;
            }
        }
    }

}