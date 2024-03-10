function roman_numeral_converter(num) {
    const roman_numerals = [
      { numeral: "M", value: 1000 },
      { numeral: "CM", value: 900 },
      { numeral: "D", value: 500 },
      { numeral: "CD", value: 400 },
      { numeral: "C", value: 100 },
      { numeral: "XC", value: 90 },
      { numeral: "L", value: 50 },
      { numeral: "XL", value: 40 },
      { numeral: "X", value: 10 },
      { numeral: "IX", value: 9 },
      { numeral: "V", value: 5 },
      { numeral: "IV", value: 4 },
      { numeral: "I", value: 1 }
    ]
    let result = "";
    for (let i = 0; i < roman_numerals.length; i++) {
      while (num >= roman_numerals[i].value) {
        result += roman_numerals[i].numeral;
        num -= roman_numerals[i].value;
      }
    }
    return result;
}


console.log(roman_numeral_converter(12));