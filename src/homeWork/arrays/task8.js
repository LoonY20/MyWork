"use strict";
function swapCouplePart(arr){
    if(typeof arr != 'object' || arr == null) return undefined;
    let arrLn = arr.length;
    let helpArr = [];
    if(arr.length % 2 == 0){
        for(let i = 0, j = arrLn/2; i < arrLn/2 && j < arrLn; i++, j++){
            helpArr[i] = arr[j];
            arr[j] = arr[i];
            arr[i] = helpArr[i];
        };
    }
    else {
        let halfL = Math.ceil(arrLn/2);
        for(let i = 0, j = halfL; i < halfL; i++, j++){
            helpArr[i] = arr[j];
            arr[j] = arr[i];
            arr[i] = helpArr[i];
        };
        arr.splice(Math.floor(arrLn/2), 1);
    }
    return arr;
}