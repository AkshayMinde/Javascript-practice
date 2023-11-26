const accountId = 144553
let accountEmail = "akshay@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2; // not allowed
console.log(accountId);

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Pune,Maharashtra"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

/*
    Prefer not to use var
    because of issue in block code and functional code
*/