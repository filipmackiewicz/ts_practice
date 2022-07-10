const person = {
    name: 'Filip',
    age: 24,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivites: string[];
favoriteActivites = ['Sports'];

console.log(person.name);


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
