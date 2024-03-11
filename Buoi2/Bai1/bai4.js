function isValidUSPhoneNumber(str) {
    // Define the regular expression pattern for valid US phone numbers
    const pattern = /^(1[- ]?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  
    // Test the input string against the pattern
    return pattern.test(str);
  }
  
  // Test cases
  console.log(isValidUSPhoneNumber("1(555)555-5555"));  // true
  console.log(isValidUSPhoneNumber("2 (757) 622-7382"));  // false
