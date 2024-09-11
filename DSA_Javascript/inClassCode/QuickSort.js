// Pivot Element
// [1, 21, 4 ,13, 2, 4]
//         |
//       Pivot

function quickSort(array){
    if(array.length < 1){
        return array;
    }
    let pivot = Math.floor(Math.random() * (array.length));
    let i = 0;    
    for(let j = 0; j < array.length; j++){
        if(array[j] < array[pivot]){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    console.log(left,right);
    quickSort(left,result);
    quickSort(right,result);
}

var arr = [3, 5, 1, 2, 4, 6, 7, 8, 9, 10];
console.log(quickSort(arr));