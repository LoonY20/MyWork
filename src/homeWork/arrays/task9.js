"use strict";
function bubbleSort(array){
    if(typeof array != 'object' || array == null) return undefined;
    let x = 0;
    let swapped = true;
    while(swapped == true){
        swapped = false;
        for(let i = 0; i < array.length-1; i++){
            if(array[i] > array[i+1]){
                x = array[i+1];
                array[i+1] = array[i];
                array[i] = x;
                swapped = true;
            };
        };
    };
    return array;
};
function insertSort(array){
    if(typeof array != 'object' || array == null) return undefined;
    let x = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] > array[j]){
                x = array[j];
                array[j] = array[i];
                array[i] = x;
            };
        };
    };
    return array;
};
function selectSort(array){
    if(typeof array != 'object' || array == null) return undefined;
    let x = 0;
    for(let i = 0; i < array.length; i++){
        let min = i;
        for(let j = i+1; j < array.length; j++){
            if(array[min] > array[j]){
                min = j;
            };
        };
        x = array[min];
        array[min] = array[i];
        array[i] = x;
    };
    return array;
};

