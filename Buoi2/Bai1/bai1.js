const regex = /[0-9a-zA-Z]/;


function palindrome(str) {
    let newStr = "";
    for(let i =0;i<str.length;i++){
        if(isAlphanumeric(str[i])){
            newStr +=str[i];
        }
    }
    newStr = newStr.toLowerCase();
    for(let i =0;i<newStr.length/2;i++){
        if(newStr[i] !== newStr[newStr.length-1-i]){
            return false;
        }
    }
    return true;
}


function isAlphanumeric(str) {
    return regex.test(str);
}

// Example usage:

