//REMOVEBLANKS()
function removeBlanks(text) {
    textArray = text.split(" ");
    console.log(textArray.join(""));
}

//GETDIGITS()
function getDigits(input) {
    let newInteger = "";
    arr = input.split("");
    for(let i = 0; i < arr.length; i++) {
        if(isNaN(arr[i]) == false) {
            newInteger = newInteger + arr[i];
        }
    }
    console.log(newInteger);
}

//ACRONYMS()
function acronyms(text) {
    let textArr = text.split(" ");
    let acronym = "";

    for(let i = 0; i < textArr.length; i++){
        let element = textArr[i].split("");
        acronym = acronym + element[0];
    }

    console.log(acronym.toUpperCase());
}

//COUNTNONSPACES()
function countNonSpaces(text) {
    let textArr = text.split(" ");
    let result = textArr.join("").length;

    console.log(result);
}

//REMOVESHORTERSTRINGS()
function removeShorterStrings(arr, value) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= value) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);
}