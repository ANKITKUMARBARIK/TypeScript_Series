enum Role {
    Admin,
    User,
    Guest,
}
const currentRole: Role = Role.User;
console.log(currentRole); // 1

// custom values
enum userRoles {
    USER = "USER",
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
}
console.log(userRoles.ADMIN);

enum statusCodes {
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 500",
}
const res: statusCodes = statusCodes.ABANDONED;
console.log(res);
