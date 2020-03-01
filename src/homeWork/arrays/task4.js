"use strict";
function findIndexMaxElem(arr){
    let max = 0;
    let id = 0;
    if(typeof arr != 'object' || arr == null) return undefined;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            id = i;  
        }
        }
        return i - 1;
    
 
    
}
