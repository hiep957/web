

function decodeRot13(str) {
    let newStr = "";
    for(let i =0; i<str.length; i++) {
        let char = str[i];
        if (char.match(/[A-Z]/)) {
            // trả về mã Unicode của ký tự tại vị trí i trong chuỗi
            let charCode = str.charCodeAt(i);
            let shiftCode = charCode -13;
            if(shiftCode < 'A'.charCodeAt(0)) {
                shiftCode = shiftCode +26;
            }
            newStr += String.fromCharCode(shiftCode);
        }
        else {
            newStr += char;
        }

    }
    return newStr;
}

// Example usage:

decodeRot13(encodedMessage);

