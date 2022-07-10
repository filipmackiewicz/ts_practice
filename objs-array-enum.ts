
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

const person = {
    name: 'Filip',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;
// console.log(person.role);

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name);


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log("is admin");
}
