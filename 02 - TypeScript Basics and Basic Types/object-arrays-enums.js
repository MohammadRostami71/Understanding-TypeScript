// const ADMIN=0;
// const READ_ONLY=1;
// const AUTHOR=2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Mohammad',
    age: 30,
    hobbies: ['sports', 'cookies'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
var favoriteActivites;
favoriteActivites = ['sport'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log(person.role);
