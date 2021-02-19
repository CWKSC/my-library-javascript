const Pattern = {
    returnState: Object.freeze({step: 1, prev: -1, end: 0, repeat: 2}),
    backTracking: function (init, f, 
        whenStep = null, whenPrev = null, whenEnd = null){
        var states = [init];
        while(true){
            if(states.length == 0) return [];
            var result = f(states[states.length - 1]);
            function step(){
                whenRouter(whenStep);
                states.push(result[1]);
            }
            function prev(){
                whenRouter(whenPrev);
                states.pop();
            }
            function end(){
                whenRouter(whenEnd);
                if(result.length == 2) { states.push(result[1]); }
                throw states;
            }
            function whenRouter(when){
                if(when != null) {
                    let temp = when(result[1]);
                    if(temp != undefined) {
                        router(temp[0]);
                    }
                }
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