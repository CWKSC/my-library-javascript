const Pattern = {
    returnState: Object.freeze({ step: 1, prev: -1, end: 0, repeat: 2 }),
    backTracking: function (init, f,
        whenStep = null, whenPrev = null, whenEnd = null) {
        var states = [init];
        while (true) {
            if (states.length == 0) return [];
            var result = f(states[states.length - 1]);
            function step(n) {
                if(whenRouter(whenStep)){
                    for(let i = 0; i < n; i++){
                        states.push(result[i + 1]);
                    }
                }
            }
            function prev(n) {
                if(whenRouter(whenPrev)){
                    for(let i = 0; i < n; i++){
                        states.pop();
                    }
                }
            }
            function end() {
                if(whenRouter(whenEnd)){
                    if (result.length == 2) { states.push(result[1]); }
                    throw states;
                }
            }
            function whenRouter(when) {
                if (when != null) {
                    let temp = when(result[1]);
                    if (temp != undefined) {
                        router(temp[0]);
                        return false;
                    }
                }
                return true;
            }
            function router(returnState) {
                if (returnState > 0) {
                    step(returnState);
                } else if (returnState < 0) {
                    prev(returnState);
                } else if (returnState == 0) {
                    end();
                }
                // switch (returnState) {
                //     case Pattern.returnState.step: step(); break;
                //     case Pattern.returnState.prev: prev(); break;
                //     case Pattern.returnState.end: end(); break;
                //     case Pattern.returnState.repeat: break;
                //     default: break;
                // }
            }
            try {
                if (result != undefined) {
                    router(result[0]);
                }
            } catch (returnValue) {
                return returnValue;
            }
        }
    },
    Test_backTracking: function(){
        var maze = 
        [[3, 0, 0, 0],
        [1, 0, 1, 1],
        [1, 0, 1, 1],
        [0, 0, 0, 2]];

        var positionOffset = [{x: 0, y: -1}, {x: 1, y: 0}, {x: 0, y: 1}, {x: -1, y: 0}];
        function* upRightDownLeft(){
            for(var i = 0; i < positionOffset.length; i++){
                yield positionOffset[i];
            }
        }

        Pattern.backTracking(
        {
            position: {x: 0, y: 0}, 
            maze: maze, 
            checkDirection: upRightDownLeft()
        }, 
        state => {

            while(true){
                let nextDirection = state.checkDirection.next().value;
                console.log("nextDirection: ", nextDirection, nextDirection == undefined);
                if(nextDirection == undefined) break;
                let nextPosition = 
                    {x: state.position.x + nextDirection.x, 
                    y: state.position.y + nextDirection.y};
                console.log("nextPosition: ", nextPosition);
                if(nextPosition.x < 0) continue;
                console.log("nextPosition.x < 0: ", nextPosition.x < 0);
                if(nextPosition.x >= state.maze[0].length) continue;
                console.log("nextPosition.x > state.maze[0].length: ", nextPosition.x > state.maze[0].length, state.maze[0].length);
                if(nextPosition.y < 0) continue;
                console.log("nextPosition.y < 0: ", nextPosition.y < 0);
                if(nextPosition.y >= state.maze.length) continue;
                console.log("nextPosition.y > state.maze.length: ", nextPosition.y > state.maze.length, state.maze.length);
                let mazeValue = state.maze[nextPosition.y][nextPosition.x];
                console.log(mazeValue);
                if(mazeValue == 1) continue;
                if(mazeValue == 3) continue;
                if(mazeValue == 2) return [0];
                let newState = JSON.parse(JSON.stringify(state));
                newState.maze[nextPosition.y][nextPosition.x] = 3;
                newState.position.x = nextPosition.x;
                newState.position.y = nextPosition.y;
                newState.checkDirection = upRightDownLeft();
                console.log(newState);
                return [1, newState];
            }

            console.log("prev");
            return [-1];
        });
    }

}