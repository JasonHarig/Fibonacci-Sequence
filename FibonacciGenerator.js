
function fibonacciGenerator(n){

    var fibArray=[];
    if(n===1){
    fibArray = [0];
    }
    else if(n===2){
    fibArray = [0,1];
    }
    else{
        fibArray = [0,1];

        for(var i =2; i < n; i++) {

            fibArray.push(fibArray[fibArray.length -2] + fibArray[fibArray.length -1]);
        }
    }

    return fibArray;

}

fibArray = fibonacciGenerator(5);
console.log(fibArray);
