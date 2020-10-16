function isEven(num){
    if(num % 2 !== 0){
        console.log(true);
    } else {
        console.log(false);
    }
}

let factorial = (num) => {
    let result = num;
    if (num === 0 || num === 1) {
        return 1;
    }
    while (num > 1) {
        num--;
        result = result * num;
    }
    return result;
}

let kebabToSnake = (str) => {
    let result = str.replace(/-/g,"_");
    return result;
}