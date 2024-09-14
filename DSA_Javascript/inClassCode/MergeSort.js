function mergeSort(array){
    if (array.length <= 1){
        return array;
    }
    let middle = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0,middle));
    let right = mergeSort(array.slice(middle, array.length));
    return merge(left,right);
}

function merge(left,right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while(leftIndex < left.length){
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < right.length){
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

var array = [3, 5, 1, 2, 4, 6, 7, 8, 9, 10];
console.log(mergeSort(array));

