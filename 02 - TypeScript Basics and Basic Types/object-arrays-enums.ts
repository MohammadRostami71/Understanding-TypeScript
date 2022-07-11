// const ADMIN=0;
// const READ_ONLY=1;
// const AUTHOR=2;

enum Role {
    ADMIN,READ_ONLY,AUTHOR
}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    // role: [number, string];
    role: any;
} = {
    name: 'Mohammad',
    age: 30,
    hobbies: ['sports', 'cookies'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivites: string[];
favoriteActivites = ['sport']

for (const hobby of person.hobbies) {
    console.log(hobby);
}

console.log(person.role)