exports.validateGmail = function (param) {
  let gmail = `${param}`;
  let trimmedGmail = gmail.trim().replace(" ", "");
  let reg = /[a-zA-Z0-9]/;
  let reg1 = /[a-z]+/g;
  let reg2 = /[^a-zA-Z0-9\.]/g;
  if (gmail[0].match(reg) === null) {
    return false;
  } else if (gmail.length !== trimmedGmail.length) {
    return false;
  } else if (gmail.slice(-10) === "@gmail.com") {
    let reverseGmail = gmail.split("").reverse().join("");
    const username = reverseGmail.slice(10).split("").reverse().join("");
    if (!(username.length >= 6 && username.length <= 30)) {
      return false;
    } else if (username.length >= 8 && username.match(reg1) === null) {
      return false;
    } else if (username.match(reg2) !== null) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
