"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
const currentRole = Role.User;
console.log(currentRole); // 1
// custom values
var userRoles;
(function (userRoles) {
    userRoles["USER"] = "USER";
    userRoles["ADMIN"] = "ADMIN";
    userRoles["MODERATOR"] = "MODERATOR";
})(userRoles || (userRoles = {}));
console.log(userRoles.ADMIN);
var statusCodes;
(function (statusCodes) {
    statusCodes["ABANDONED"] = "abandoned status code 500";
    statusCodes["NOTFOUND"] = "not found status code 500";
})(statusCodes || (statusCodes = {}));
const res = statusCodes.ABANDONED;
console.log(res);
