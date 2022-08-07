//PUSHFRONT()
function pushFront(arr, value) {
    let newArr = [];
    newArr[0] = value;
    for(let i=0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

//POPFRONT()
function popFront(arr) {
    let firstElement = arr[0];

    for(let i=0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length--;
    console.log(arr);
    return firstElement;
}

//INSERTAT()
function insertAt(arr, position, value) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        if(i == position) {
            newArr.push(value);
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}